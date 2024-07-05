package main

import (
	"bufio"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
)

// Auto de-obfuscation of gameforge "game1.js" fingerprint script
// https://gameforge.com/tra/game1.js
//
// You need `node` and `js-beautify` to be installed and available.

func main() {
	content := getGame1Js()
	raw := extractRawJavascript(content)

	// Step1 is to unescape the string using node, then run js-beautify on it.
	// Once done, we replace some trivial obfuscation patterns.
	// Code should be more or less readable at this point
	step1 := nodeUnescape(raw)
	step1 = jsBeautify(step1)
	step1 = replaceTrivial(step1)
	step1 = replaceDecodeStrRefs(step1)

	// Start node and feed initial source code
	srcForNode := strings.ReplaceAll(step1, "\n", "")
	cmd, writer, scanner := startNodeProcess()
	defer cmd.Process.Kill()
	_ = sendJavaScript(writer, scanner, srcForNode)

	step1 = replaceObfuscatedStrings(step1, writer, scanner)
	step1 = replaceHexNumbers(step1)

	_ = os.WriteFile("out.js", []byte(step1), 0644)
}

// Get game1.js from gameforge, or read it from disk if it is already downloaded
func getGame1Js() (out string) {
	fileName := "game1.js"
	if _, err := os.Stat(fileName); err != nil {
		fmt.Println("downloading " + fileName)
		res, err := http.Get("https://gameforge.com/tra/game1.js")
		if err != nil {
			panic(err)
		}
		defer res.Body.Close()
		body, _ := io.ReadAll(res.Body)
		if err := os.WriteFile(fileName, body, 0644); err != nil {
			panic(err)
		}
		out = string(body)
	} else {
		fmt.Println(fileName + " exists")
		content, err := os.ReadFile(fileName)
		if err != nil {
			panic(err)
		}
		out = string(content)
	}
	return
}

// game1.js eval a string, this function extract that string
func extractRawJavascript(src string) string {
	firstIdx := strings.Index(src, "'")
	lastIdx := strings.LastIndex(src, "'")
	return src[firstIdx+1 : lastIdx]
}

// replaceTrivial replace some trivial "obfuscations"
func replaceTrivial(in string) string {
	in = strings.ReplaceAll(in, "!![]", "true")
	in = strings.ReplaceAll(in, "![]", "false")
	in = strings.ReplaceAll(in, `\x20`, ` `)
	in = strings.ReplaceAll(in, `\x22`, `"`)
	return in
}

func replaceDecodeStrRefs(in string) string {
	// First line contains the function to decode a string
	// const decodeStrRef = decodeStr;
	scanner := bufio.NewScanner(strings.NewReader(in))
	scanner.Scan()
	rgx := regexp.MustCompile(`const (\w+) = (\w+);`)
	m := rgx.FindStringSubmatch(scanner.Text())
	in = strings.ReplaceAll(in, m[1], "decodeStrRef")
	in = strings.ReplaceAll(in, m[2], "decodeStr")

	// Replace all references to the decodeStr function
	for { // repeat until no more matches
		rgx = regexp.MustCompile(`const (\w+) = decodeStr`)
		m1 := rgx.FindAllStringSubmatch(in, -1)
		count := 0
		for _, m := range m1 {
			if m[1] != "decodeStrRef" {
				in = strings.ReplaceAll(in, m[1], "decodeStrRef")
				count++
			}
		}
		if count == 0 {
			break
		}
	}

	return in
}

// Decode and replace all obfuscated strings
func replaceObfuscatedStrings(in string, writer *bufio.Writer, scanner *bufio.Scanner) string {
	rgx := regexp.MustCompile(`(decodeStrRef\(([^)]+)\))`)
	matches := rgx.FindAllStringSubmatch(in, -1)
	for _, match := range matches {
		code := fmt.Sprintf("decodeStr(%s);", match[2])
		newVal := sendJavaScript(writer, scanner, code)
		in = strings.Replace(in, match[1], newVal, 1)
	}
	return in
}

// Replace all base 16 numbers back to base 10
func replaceHexNumbers(in string) string {
	replacementFunc := func(s string) string {
		v, _ := strconv.ParseInt(s[2:], 16, 64)
		return strconv.FormatInt(v, 10)
	}
	re := regexp.MustCompile(`\b0x[0-9a-fA-F]+\b`)
	in = re.ReplaceAllStringFunc(in, replacementFunc)
	return in
}

// Start node in interactive mode.
// The script will then use this process to "decrypt" the strings in the obfuscated javascript and replace them.
func startNodeProcess() (*exec.Cmd, *bufio.Writer, *bufio.Scanner) {
	cmd := exec.Command("node", "--interactive")
	stdin, err := cmd.StdinPipe()
	if err != nil {
		panic(err)
	}
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		panic(err)
	}
	if err := cmd.Start(); err != nil {
		panic(err)
	}
	writer := bufio.NewWriter(stdin)
	scanner := bufio.NewScanner(stdout)
	scanner.Scan()
	scanner.Scan()
	return cmd, writer, scanner
}

// Send some javascript to the node process and return the output from node.
func sendJavaScript(writer *bufio.Writer, scanner *bufio.Scanner, code string) string {
	codeWithNewline := code + "\n"
	_, err := writer.WriteString(codeWithNewline)
	if err != nil {
		panic(err)
	}
	if err := writer.Flush(); err != nil {
		panic(err)
	}
	if scanner.Scan() {
		return strings.TrimPrefix(scanner.Text(), "> ")
	}
	if scanner.Err() != nil {
		panic(err)
	}
	return ""
}

// Run "unescape" using node
func nodeUnescape(in string) string {
	cmd := exec.Command("node", "-e", "console.log(unescape('"+in+"'))")
	processed, err := cmd.Output()
	if err != nil {
		panic(err)
	}
	return string(processed)
}

// Run js-beautify to format the javascript into human-readable code
func jsBeautify(in string) string {
	cmd := exec.Command("js-beautify", "-q", "-f '-'")
	cmd.Stdin = strings.NewReader(in)
	processed, err := cmd.Output()
	if err != nil {
		panic(err)
	}
	return string(processed)
}
