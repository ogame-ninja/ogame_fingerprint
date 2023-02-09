const timezones = Intl.supportedValuesOf('timeZone');
const browsers = [
  {browser: "Chrome", engine: "Blink", vendor: "Google Inc."},
  {browser: "Opera", engine:"Blink", vendor: "Google Inc."},
  {browser: "Edge", engine:"Trident", vendor: "Google Inc."},
  {browser: "Internet Explorer", engine:"Trident", vendor: "Google Inc."},
  {browser: "Safari", engine:"WebKit", vendor: "Apple Computer, Inc."},
  {browser: "Firefox", engine:"Gecko", vendor: ""}
];
const languages = ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
    "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
    "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
    "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
    "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
    "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu",
    "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
    "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
    "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
    "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
    "ji", "zu"];
const ram = [0, 4, 8, 16, 32];
const donottrack = ["unspecified", "1"];
const screend = [8, 15, 16, 24, 32, 48];
const system = [{name:"Windows 10", version:"10"}, {name:"Windows 8.1", version:"8.1"}, {name:"Windows 8", version:"8"}, {name:"Windows 7", version:"7"}, {name:"Unknown", version:"Unknown"}];
const hardware = [0, 1, 4, 8];
const screen_resolution = [{w:1980, h:1080}];

function choose_random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

const random_hex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

function random_x_game(){
    return new Array(3).fill(0).map(() => Math.random().toString(36).substr(2, 9)).reduce((e1, e2) => e1 + e2, '')
}

function random_x_vec(){
    var randS = () => String.fromCharCode(32 + Math.random() * 94 | 0);
    var r = Array.from(Array(100), e => randS());

    return r.join('') + ' ' + new Date().getTime();
}

function random_decimal(min, max, places) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
}

function random_graphics_card(){
    let arr = ["Nvidia GeForce RTX 3080 Ti", "Nvidia GeForce GTX 1660 Ti", "NVIDIA GeForce RTX 2060"];
    return `Google Inc. (NVIDIA), (NVIDIA, ${arr[Math.floor(Math.random() * arr.length)]})`;
}

function encrypt(arg1) {
    let retardPseudoB64Encoding = function(arg1) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='['split']('');
        let sb = '';
        const lenMod3 = arg1.length % 3;
        for (let i = 0; i < arg1.length;) {
            const first = arg1.charCodeAt(i++),
                second = arg1.charCodeAt(i++),
                third = arg1.charCodeAt(i++);
            if (first > 255 || second > 255 || third > 255) throw new Error('Input not valid');
            const tmpRes = first << 16 | second << 8 | third;
            sb += chars[tmpRes >> 18 & 63] + chars[tmpRes >> 12 & 63] + chars[tmpRes >> 6 & 63] + chars[tmpRes & 63];
        }
        return lenMod3 > 0 ? sb.slice(0, lenMod3 - 3) : sb;
    };

    arg1 = encodeURIComponent(arg1);
    let sb = arg1[0];
    for (let i = 1; i < arg1.length; ++i) {
        sb += String.fromCharCode((sb.charCodeAt(i - 1) + arg1.charCodeAt(i)) % 256);
    }
    return retardPseudoB64Encoding(sb);
}

function random_json(){
    let x_game = random_x_game();
    let os = choose_random(system);
    let browser = choose_random(browsers);
    let screenr = choose_random(screen_resolution);

    return {
        'dg': 8,
        'dO4': choose_random(timezones),
        'ZNJG': choose_random(donottrack),
        'cOJRtSqNAQ': browser.engine,
        'b-I2rx-E': os.name,
        'YdFB': browser.browser,
        'dttJrRyO': browser.vendor,
        'bdI_': choose_random(ram),
        'Y9JA': choose_random(hardware),
        'bM07og': choose_random(languages),
        'cNxRuCGPAg': random_hex(64),
        'Z9dM': random_graphics_card(),
        'ZtVDtyo': random_hex(64),
        'YdY6oxJV': random_hex(64),
        'b-I4nQ-C61rI': os.version,
        'd-BEuCA': screenr.w,
        'aM02nQV5': screenr.h,
        'ZMk5rRU': choose_random(screend),
        'bL8zohR5': true,
        'c8Y6qRuA': true,
        'dt9DqBc': random_hex(64),
        'YdY6oxI': random_hex(64),
        'bdI2nwA': random_hex(64),
        'cNVHtB2QA2zbSbw': random_hex(64),
        'YdY6oxJYqA': random_decimal(25, 124, 14),
        'd9w-pRFXpw': random_hex(64),
        'Y8QyqAl8whI': parseFloat(random_decimal(-1920677538, -2120277538, 0)),
        'floor': new Date().toISOString(),
        'depTtw': x_game,
        'top': window.btoa(random_x_vec()),
        'ZA': Math.floor(Math.random() * (860 - 152) + 152)
    }
}

function tracking(){
    return `tra:${encrypt(JSON.stringify(random_json()))}`;
}
