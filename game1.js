const fontsMap = Object['keys']({
        '.Aqua Kana': false,
        '.Helvetica LT MM': false,
        '.Times LT MM': false,
        '18thCentury': false,
        '8514oem': false,
        'AR BERKLEY': false,
        'AR JULIAN': false,
        'AR PL UKai CN': false,
        'AR PL UMing CN': false,
        'AR PL UMing HK': false,
        'AR PL UMing TW': false,
        'AR PL UMing TW MBE': false,
        'Aakar': false,
        'Abadi MT Condensed Extra Bold': false,
        'Abadi MT Condensed Light': false,
        'Abyssinica SIL': false,
        'AcmeFont': false,
        'Adobe Arabic': false,
        'Agency FB': false,
        'Aharoni': false,
        'Aharoni Bold': false,
        'Al Bayan': false,
        'Al Bayan Bold': false,
        'Al Bayan Plain': false,
        'Al Nile': false,
        'Al Tarikh': false,
        'Aldhabi': false,
        'Alfredo': false,
        'Algerian': false,
        'Alien Encounters': false,
        'Almonte Snow': false,
        'American Typewriter': false,
        'American Typewriter Bold': false,
        'American Typewriter Condensed': false,
        'American Typewriter Light': false,
        'Amethyst': false,
        'Andale Mono': false,
        'Andale Mono Version': false,
        'Andalus': false,
        'Angsana New': false,
        'AngsanaUPC': false,
        'Ani': false,
        'AnjaliOldLipi': false,
        'Aparajita': false,
        'Apple Braille': false,
        'Apple Braille Outline 6 Dot': false,
        'Apple Braille Outline 8 Dot': false,
        'Apple Braille Pinpoint 6 Dot': false,
        'Apple Braille Pinpoint 8 Dot': false,
        'Apple Chancery': false,
        'Apple Color Emoji': false,
        'Apple LiGothic Medium': false,
        'Apple LiSung Light': false,
        'Apple SD Gothic Neo': false,
        'Apple SD Gothic Neo Regular': false,
        'Apple SD GothicNeo ExtraBold': false,
        'Apple Symbols': false,
        'AppleGothic': false,
        'AppleGothic Regular': false,
        'AppleMyungjo': false,
        'AppleMyungjo Regular': false,
        'AquaKana': false,
        'Arabic Transparent': false,
        'Arabic Typesetting': false,
        'Arial': true,
        'Arial Baltic': false,
        'Arial Black': true,
        'Arial Bold': false,
        'Arial Bold Italic': false,
        'Arial CE': false,
        'Arial CYR': false,
        'Arial Greek': false,
        'Arial Hebrew': false,
        'Arial Hebrew Bold': false,
        'Arial Italic': false,
        'Arial Narrow': true,
        'Arial Narrow Bold': false,
        'Arial Narrow Bold Italic': false,
        'Arial Narrow Italic': false,
        'Arial Rounded Bold': false,
        'Arial Rounded MT Bold': false,
        'Arial TUR': false,
        'Arial Unicode MS': false,
        'ArialHB': false,
        'Arimo': false,
        'Asimov': false,
        'Autumn': false,
        'Avenir': false,
        'Avenir Black': false,
        'Avenir Book': false,
        'Avenir Next': false,
        'Avenir Next Bold': false,
        'Avenir Next Condensed': false,
        'Avenir Next Condensed Bold': false,
        'Avenir Next Demi Bold': false,
        'Avenir Next Heavy': false,
        'Avenir Next Regular': false,
        'Avenir Roman': false,
        'Ayuthaya': false,
        'BN Jinx': false,
        'BN Machine': false,
        'BOUTON International Symbols': false,
        'Baby Kruffy': false,
        'Baghdad': false,
        'Bahnschrift': true,
        'Balthazar': false,
        'Bangla MN': false,
        'Bangla MN Bold': false,
        'Bangla Sangam MN': false,
        'Bangla Sangam MN Bold': false,
        'Baskerville': false,
        'Baskerville Bold': false,
        'Baskerville Bold Italic': false,
        'Baskerville Old Face': false,
        'Baskerville SemiBold': false,
        'Baskerville SemiBold Italic': false,
        'Bastion': false,
        'Batang': false,
        'BatangChe': false,
        'Bauhaus 93': false,
        'Beirut': false,
        'Bell MT': false,
        'Bell MT Bold': false,
        'Bell MT Italic': false,
        'Bellerose': false,
        'Berlin Sans FB': false,
        'Berlin Sans FB Demi': false,
        'Bernard MT Condensed': false,
        'BiauKai': false,
        'Big Caslon': false,
        'Big Caslon Medium': false,
        'Birch Std': false,
        'Bitstream Charter': false,
        'Bitstream Vera Sans': false,
        'Blackadder ITC': false,
        'Blackoak Std': false,
        'Bobcat': false,
        'Bodoni 72': false,
        'Bodoni MT': false,
        'Bodoni MT Black': false,
        'Bodoni MT Poster Compressed': false,
        'Bodoni Ornaments': false,
        'BolsterBold': false,
        'Book Antiqua': false,
        'Book Antiqua Bold': false,
        'Bookman Old Style': false,
        'Bookman Old Style Bold': false,
        'Bookshelf Symbol 7': false,
        'Borealis': false,
        'Bradley Hand': false,
        'Bradley Hand ITC': false,
        'Braggadocio': false,
        'Brandish': false,
        'Britannic Bold': false,
        'Broadway': false,
        'Browallia New': false,
        'BrowalliaUPC': false,
        'Brush Script': false,
        'Brush Script MT': false,
        'Brush Script MT Italic': false,
        'Brush Script Std': false,
        'Brussels': false,
        'Calibri': true,
        'Calibri Bold': false,
        'Calibri Light': true,
        'Californian FB': false,
        'Calisto MT': false,
        'Calisto MT Bold': false,
        'Calligraphic': false,
        'Calvin': false,
        'Cambria': true,
        'Cambria Bold': false,
        'Cambria Math': true,
        'Candara': true,
        'Candara Bold': false,
        'Candles': false,
        'Carrois Gothic SC': false,
        'Castellar': false,
        'Centaur': false,
        'Century': false,
        'Century Gothic': false,
        'Century Gothic Bold': false,
        'Century Schoolbook': false,
        'Century Schoolbook Bold': false,
        'Century Schoolbook L': false,
        'Chalkboard': false,
        'Chalkboard Bold': false,
        'Chalkboard SE': false,
        'Chalkboard SE Bold': false,
        'ChalkboardBold': false,
        'Chalkduster': false,
        'Chandas': false,
        'Chaparral Pro': false,
        'Chaparral Pro Light': false,
        'Charlemagne Std': false,
        'Charter': false,
        'Chilanka': false,
        'Chiller': false,
        'Chinyen': false,
        'Clarendon': false,
        'Cochin': false,
        'Cochin Bold': false,
        'Colbert': false,
        'Colonna MT': false,
        'Comic Sans MS': true,
        'Comic Sans MS Bold': false,
        'Commons': false,
        'Consolas': true,
        'Consolas Bold': false,
        'Constantia': true,
        'Constantia Bold': false,
        'Coolsville': false,
        'Cooper Black': false,
        'Cooper Std Black': false,
        'Copperplate': false,
        'Copperplate Bold': false,
        'Copperplate Gothic Bold': false,
        'Copperplate Light': false,
        'Corbel': true,
        'Corbel Bold': false,
        'Cordia New': false,
        'CordiaUPC': false,
        'Corporate': false,
        'Corsiva': false,
        'Corsiva Hebrew': false,
        'Corsiva Hebrew Bold': false,
        'Courier': true,
        'Courier 10 Pitch': false,
        'Courier Bold': false,
        'Courier New': true,
        'Courier New Baltic': false,
        'Courier New Bold': false,
        'Courier New CE': false,
        'Courier New Italic': false,
        'Courier Oblique': false,
        'Cracked Johnnie': false,
        'Creepygirl': false,
        'Curlz MT': false,
        'Cursor': false,
        'Cutive Mono': false,
        'DFKai-SB': false,
        'DIN Alternate': false,
        'DIN Condensed': false,
        'Damascus': false,
        'Damascus Bold': false,
        'Dancing Script': false,
        'DaunPenh': false,
        'David': false,
        'Dayton': false,
        'DecoType Naskh': false,
        'Deja Vu': false,
        'DejaVu LGC Sans': false,
        'DejaVu Sans': false,
        'DejaVu Sans Mono': false,
        'DejaVu Serif': false,
        'Deneane': false,
        'Desdemona': false,
        'Detente': false,
        'Devanagari MT': false,
        'Devanagari MT Bold': false,
        'Devanagari Sangam MN': false,
        'Didot': false,
        'Didot Bold': false,
        'Digifit': false,
        'DilleniaUPC': false,
        'Dingbats': false,
        'Distant Galaxy': false,
        'Diwan Kufi': false,
        'Diwan Kufi Regular': false,
        'Diwan Thuluth': false,
        'Diwan Thuluth Regular': false,
        'DokChampa': false,
        'Dominican': false,
        'Dotum': false,
        'DotumChe': false,
        'Droid Sans': false,
        'Droid Sans Fallback': false,
        'Droid Sans Mono': false,
        'Dyuthi': false,
        'Ebrima': true,
        'Edwardian Script ITC': false,
        'Elephant': false,
        'Emmett': false,
        'Engravers MT': false,
        'Engravers MT Bold': false,
        'Enliven': false,
        'Eras Bold ITC': false,
        'Estrangelo Edessa': false,
        'Ethnocentric': false,
        'EucrosiaUPC': false,
        'Euphemia': false,
        'Euphemia UCAS': false,
        'Euphemia UCAS Bold': false,
        'Eurostile': false,
        'Eurostile Bold': false,
        'Expressway Rg': false,
        'FangSong': false,
        'Farah': false,
        'Farisi': false,
        'Felix Titling': false,
        'Fingerpop': false,
        'Fixedsys': false,
        'Flubber': false,
        'Footlight MT Light': false,
        'Forte': false,
        'FrankRuehl': false,
        'Frankfurter Venetian TT': false,
        'Franklin Gothic Book': false,
        'Franklin Gothic Book Italic': false,
        'Franklin Gothic Medium': true,
        'Franklin Gothic Medium Cond': false,
        'Franklin Gothic Medium Italic': false,
        'FreeMono': false,
        'FreeSans': false,
        'FreeSerif': false,
        'FreesiaUPC': false,
        'Freestyle Script': false,
        'French Script MT': false,
        'Futura': false,
        'Futura Condensed ExtraBold': false,
        'Futura Medium': false,
        'GB18030 Bitmap': false,
        'Gabriola': true,
        'Gadugi': true,
        'Garamond': false,
        'Garamond Bold': false,
        'Gargi': false,
        'Garuda': false,
        'Gautami': false,
        'Gazzarelli': false,
        'Geeza Pro': false,
        'Geeza Pro Bold': false,
        'Geneva': false,
        'GenevaCY': false,
        'Gentium': false,
        'Gentium Basic': false,
        'Gentium Book Basic': false,
        'GentiumAlt': false,
        'Georgia': true,
        'Georgia Bold': false,
        'Geotype TT': false,
        'Giddyup Std': false,
        'Gigi': false,
        'Gill': false,
        'Gill Sans': false,
        'Gill Sans Bold': false,
        'Gill Sans MT': false,
        'Gill Sans MT Bold': false,
        'Gill Sans MT Condensed': false,
        'Gill Sans MT Ext Condensed Bold': false,
        'Gill Sans MT Italic': false,
        'Gill Sans Ultra Bold': false,
        'Gill Sans Ultra Bold Condensed': false,
        'Gisha': false,
        'Glockenspiel': false,
        'Gloucester MT Extra Condensed': false,
        'Good Times': false,
        'Goudy': false,
        'Goudy Old Style': false,
        'Goudy Old Style Bold': false,
        'Goudy Stout': false,
        'Greek Diner Inline TT': false,
        'Gubbi': false,
        'Gujarati MT': false,
        'Gujarati MT Bold': false,
        'Gujarati Sangam MN': false,
        'Gujarati Sangam MN Bold': false,
        'Gulim': false,
        'GulimChe': false,
        'GungSeo Regular': false,
        'Gungseouche': false,
        'Gungsuh': false,
        'GungsuhChe': false,
        'Gurmukhi': false,
        'Gurmukhi MN': false,
        'Gurmukhi MN Bold': false,
        'Gurmukhi MT': false,
        'Gurmukhi Sangam MN': false,
        'Gurmukhi Sangam MN Bold': false,
        'Haettenschweiler': false,
        'Hand Me Down S (BRK)': false,
        'Hansen': false,
        'Harlow Solid Italic': false,
        'Harrington': false,
        'Harvest': false,
        'HarvestItal': false,
        'Haxton Logos TT': false,
        'HeadLineA Regular': false,
        'HeadlineA': false,
        'Heavy Heap': false,
        'Hei': false,
        'Hei Regular': false,
        'Heiti SC': false,
        'Heiti SC Light': false,
        'Heiti SC Medium': false,
        'Heiti TC': false,
        'Heiti TC Light': false,
        'Heiti TC Medium': false,
        'Helvetica': true,
        'Helvetica Bold': false,
        'Helvetica CY Bold': false,
        'Helvetica CY Plain': false,
        'Helvetica LT Std': false,
        'Helvetica Light': false,
        'Helvetica Neue': false,
        'Helvetica Neue Bold': false,
        'Helvetica Neue Medium': false,
        'Helvetica Oblique': false,
        'HelveticaCY': false,
        'HelveticaNeueLT Com 107 XBlkCn': false,
        'Herculanum': false,
        'High Tower Text': false,
        'Highboot': false,
        'Hiragino Kaku Gothic Pro W3': false,
        'Hiragino Kaku Gothic Pro W6': false,
        'Hiragino Kaku Gothic ProN W3': false,
        'Hiragino Kaku Gothic ProN W6': false,
        'Hiragino Kaku Gothic Std W8': false,
        'Hiragino Kaku Gothic StdN W8': false,
        'Hiragino Maru Gothic Pro W4': false,
        'Hiragino Maru Gothic ProN W4': false,
        'Hiragino Mincho Pro W3': false,
        'Hiragino Mincho Pro W6': false,
        'Hiragino Mincho ProN W3': false,
        'Hiragino Mincho ProN W6': false,
        'Hiragino Sans GB W3': false,
        'Hiragino Sans GB W6': false,
        'Hiragino Sans W0': false,
        'Hiragino Sans W1': false,
        'Hiragino Sans W2': false,
        'Hiragino Sans W3': false,
        'Hiragino Sans W4': false,
        'Hiragino Sans W5': false,
        'Hiragino Sans W6': false,
        'Hiragino Sans W7': false,
        'Hiragino Sans W8': false,
        'Hiragino Sans W9': false,
        'Hobo Std': false,
        'Hoefler Text': false,
        'Hoefler Text Black': false,
        'Hoefler Text Ornaments': false,
        'Hollywood Hills': false,
        'Hombre': false,
        'Huxley Titling': false,
        'ITC Stone Serif': false,
        'ITF Devanagari': false,
        'ITF Devanagari Marathi': false,
        'ITF Devanagari Medium': false,
        'Impact': true,
        'Imprint MT Shadow': false,
        'InaiMathi': false,
        'Induction': false,
        'Informal Roman': false,
        'Ink Free': true,
        'IrisUPC': false,
        'Iskoola Pota': false,
        'Italianate': false,
        'Jamrul': false,
        'JasmineUPC': false,
        'Javanese Text': true,
        'Jokerman': false,
        'Juice ITC': false,
        'KacstArt': false,
        'KacstBook': false,
        'KacstDecorative': false,
        'KacstDigital': false,
        'KacstFarsi': false,
        'KacstLetter': false,
        'KacstNaskh': false,
        'KacstOffice': false,
        'KacstOne': false,
        'KacstPen': false,
        'KacstPoster': false,
        'KacstQurn': false,
        'KacstScreen': false,
        'KacstTitle': false,
        'KacstTitleL': false,
        'Kai': false,
        'Kai Regular': false,
        'KaiTi': false,
        'Kailasa': false,
        'Kailasa Regular': false,
        'Kaiti SC': false,
        'Kaiti SC Black': false,
        'Kalapi': false,
        'Kalimati': false,
        'Kalinga': false,
        'Kannada MN': false,
        'Kannada MN Bold': false,
        'Kannada Sangam MN': false,
        'Kannada Sangam MN Bold': false,
        'Kartika': false,
        'Karumbi': false,
        'Kedage': false,
        'Kefa': false,
        'Kefa Bold': false,
        'Keraleeyam': false,
        'Keyboard': false,
        'Khmer MN': false,
        'Khmer MN Bold': false,
        'Khmer OS': false,
        'Khmer OS System': false,
        'Khmer Sangam MN': false,
        'Khmer UI': false,
        'Kinnari': false,
        'Kino MT': false,
        'KodchiangUPC': false,
        'Kohinoor Bangla': false,
        'Kohinoor Devanagari': false,
        'Kohinoor Telugu': false,
        'Kokila': false,
        'Kokonor': false,
        'Kokonor Regular': false,
        'Kozuka Gothic Pr6N B': false,
        'Kristen ITC': false,
        'Krungthep': false,
        'KufiStandardGK': false,
        'KufiStandardGK Regular': false,
        'Kunstler Script': false,
        'Laksaman': false,
        'Lao MN': false,
        'Lao Sangam MN': false,
        'Lao UI': false,
        'LastResort': false,
        'Latha': false,
        'Leelawadee': false,
        'Letter Gothic Std': false,
        'LetterOMatic!': false,
        'Levenim MT': false,
        'LiHei Pro': false,
        'LiSong Pro': false,
        'Liberation Mono': false,
        'Liberation Sans': false,
        'Liberation Sans Narrow': false,
        'Liberation Serif': false,
        'Likhan': false,
        'LilyUPC': false,
        'Limousine': false,
        'Lithos Pro Regular': false,
        'LittleLordFontleroy': false,
        'Lohit Assamese': false,
        'Lohit Bengali': false,
        'Lohit Devanagari': false,
        'Lohit Gujarati': false,
        'Lohit Gurmukhi': false,
        'Lohit Hindi': false,
        'Lohit Kannada': false,
        'Lohit Malayalam': false,
        'Lohit Odia': false,
        'Lohit Punjabi': false,
        'Lohit Tamil': false,
        'Lohit Tamil Classical': false,
        'Lohit Telugu': false,
        'Loma': false,
        'Lucida Blackletter': false,
        'Lucida Bright': false,
        'Lucida Bright Demibold': false,
        'Lucida Bright Demibold Italic': false,
        'Lucida Bright Italic': false,
        'Lucida Calligraphy': false,
        'Lucida Calligraphy Italic': false,
        'Lucida Console': true,
        'Lucida Fax': false,
        'Lucida Fax Demibold': false,
        'Lucida Fax Regular': false,
        'Lucida Grande': false,
        'Lucida Grande Bold': false,
        'Lucida Handwriting': false,
        'Lucida Handwriting Italic': false,
        'Lucida Sans': false,
        'Lucida Sans Demibold Italic': false,
        'Lucida Sans Typewriter': false,
        'Lucida Sans Typewriter Bold': false,
        'Lucida Sans Unicode': true,
        'Luminari': false,
        'Luxi Mono': false,
        'MS Gothic': true,
        'MS Mincho': false,
        'MS Outlook': false,
        'MS PGothic': true,
        'MS PMincho': false,
        'MS Reference Sans Serif': false,
        'MS Reference Specialty': false,
        'MS Sans Serif': true,
        'MS Serif': true,
        'MS UI Gothic': true,
        'MT Extra': false,
        'MV Boli': true,
        'Mael': false,
        'Magneto': false,
        'Maiandra GD': false,
        'Malayalam MN': false,
        'Malayalam MN Bold': false,
        'Malayalam Sangam MN': false,
        'Malayalam Sangam MN Bold': false,
        'Malgun Gothic': true,
        'Mallige': false,
        'Mangal': false,
        'Manorly': false,
        'Marion': false,
        'Marion Bold': false,
        'Marker Felt': false,
        'Marker Felt Thin': false,
        'Marlett': true,
        'Martina': false,
        'Matura MT Script Capitals': false,
        'Meera': false,
        'Meiryo': false,
        'Meiryo Bold': false,
        'Meiryo UI': false,
        'MelodBold': false,
        'Menlo': false,
        'Menlo Bold': false,
        'Mesquite Std': false,
        'Microsoft': false,
        'Microsoft Himalaya': true,
        'Microsoft JhengHei': true,
        'Microsoft JhengHei UI': true,
        'Microsoft New Tai Lue': true,
        'Microsoft PhagsPa': true,
        'Microsoft Sans Serif': true,
        'Microsoft Tai Le': true,
        'Microsoft Tai Le Bold': false,
        'Microsoft Uighur': false,
        'Microsoft YaHei': true,
        'Microsoft YaHei UI': true,
        'Microsoft Yi Baiti': true,
        'Minerva': false,
        'MingLiU': false,
        'MingLiU-ExtB': true,
        'MingLiU_HKSCS': false,
        'Minion Pro': false,
        'Miriam': false,
        'Mishafi': false,
        'Mishafi Gold': false,
        'Mistral': false,
        'Modern': false,
        'Modern No. 20': false,
        'Monaco': false,
        'Mongolian Baiti': true,
        'Monospace': false,
        'Monotype Corsiva': false,
        'Monotype Sorts': false,
        'MoolBoran': false,
        'Moonbeam': false,
        'MotoyaLMaru': false,
        'Mshtakan': false,
        'Mshtakan Bold': false,
        'Mukti Narrow': false,
        'Muna': false,
        'Myanmar MN': false,
        'Myanmar MN Bold': false,
        'Myanmar Sangam MN': false,
        'Myanmar Text': true,
        'Mycalc': false,
        'Myriad Arabic': false,
        'Myriad Hebrew': false,
        'Myriad Pro': false,
        'NISC18030': false,
        'NSimSun': true,
        'Nadeem': false,
        'Nadeem Regular': false,
        'Nakula': false,
        'Nanum Barun Gothic': false,
        'Nanum Gothic': false,
        'Nanum Myeongjo': false,
        'NanumBarunGothic': false,
        'NanumGothic': false,
        'NanumGothic Bold': false,
        'NanumGothicCoding': false,
        'NanumMyeongjo': false,
        'NanumMyeongjo Bold': false,
        'Narkisim': false,
        'Nasalization': false,
        'Navilu': false,
        'Neon Lights': false,
        'New Peninim MT': false,
        'New Peninim MT Bold': false,
        'News Gothic MT': false,
        'News Gothic MT Bold': false,
        'Niagara Engraved': false,
        'Niagara Solid': false,
        'Nimbus Mono L': false,
        'Nimbus Roman No9 L': false,
        'Nimbus Sans L': false,
        'Nimbus Sans L Condensed': false,
        'Nina': false,
        'Nirmala UI': true,
        'Nirmala.ttf': false,
        'Norasi': false,
        'Noteworthy': false,
        'Noteworthy Bold': false,
        'Noto Color Emoji': false,
        'Noto Emoji': false,
        'Noto Mono': false,
        'Noto Naskh Arabic': false,
        'Noto Nastaliq Urdu': false,
        'Noto Sans': false,
        'Noto Sans Armenian': false,
        'Noto Sans Bengali': false,
        'Noto Sans CJK': false,
        'Noto Sans Canadian Aboriginal': false,
        'Noto Sans Cherokee': false,
        'Noto Sans Devanagari': false,
        'Noto Sans Ethiopic': false,
        'Noto Sans Georgian': false,
        'Noto Sans Gujarati': false,
        'Noto Sans Gurmukhi': false,
        'Noto Sans Hebrew': false,
        'Noto Sans JP': false,
        'Noto Sans KR': false,
        'Noto Sans Kannada': false,
        'Noto Sans Khmer': false,
        'Noto Sans Lao': false,
        'Noto Sans Malayalam': false,
        'Noto Sans Myanmar': false,
        'Noto Sans Oriya': false,
        'Noto Sans SC': false,
        'Noto Sans Sinhala': false,
        'Noto Sans Symbols': false,
        'Noto Sans TC': false,
        'Noto Sans Tamil': false,
        'Noto Sans Telugu': false,
        'Noto Sans Thai': false,
        'Noto Sans Yi': false,
        'Noto Serif': false,
        'Notram': false,
        'November': false,
        'Nueva Std': false,
        'Nueva Std Cond': false,
        'Nyala': false,
        'OCR A Extended': false,
        'OCR A Std': false,
        'Old English Text MT': false,
        'OldeEnglish': false,
        'Onyx': false,
        'OpenSymbol': false,
        'OpineHeavy': false,
        'Optima': false,
        'Optima Bold': false,
        'Optima Regular': false,
        'Orator Std': false,
        'Oriya MN': false,
        'Oriya MN Bold': false,
        'Oriya Sangam MN': false,
        'Oriya Sangam MN Bold': false,
        'Osaka': false,
        'Osaka-Mono': false,
        'OsakaMono': false,
        'PCMyungjo Regular': false,
        'PCmyoungjo': false,
        'PMingLiU': false,
        'PMingLiU-ExtB': true,
        'PR Celtic Narrow': false,
        'PT Mono': false,
        'PT Sans': false,
        'PT Sans Bold': false,
        'PT Sans Caption Bold': false,
        'PT Sans Narrow Bold': false,
        'PT Serif': false,
        'Padauk': false,
        'Padauk Book': false,
        'Padmaa': false,
        'Pagul': false,
        'Palace Script MT': false,
        'Palatino': false,
        'Palatino Bold': false,
        'Palatino Linotype': true,
        'Palatino Linotype Bold': false,
        'Papyrus': false,
        'Papyrus Condensed': false,
        'Parchment': false,
        'Parry Hotter': false,
        'PenultimateLight': false,
        'Perpetua': false,
        'Perpetua Bold': false,
        'Perpetua Titling MT': false,
        'Perpetua Titling MT Bold': false,
        'Phetsarath OT': false,
        'Phosphate': false,
        'Phosphate Inline': false,
        'Phosphate Solid': false,
        'PhrasticMedium': false,
        'PilGi Regular': false,
        'Pilgiche': false,
        'PingFang HK': false,
        'PingFang SC': false,
        'PingFang TC': false,
        'Pirate': false,
        'Plantagenet Cherokee': false,
        'Playbill': false,
        'Poor Richard': false,
        'Poplar Std': false,
        'Pothana2000': false,
        'Prestige Elite Std': false,
        'Pristina': false,
        'Purisa': false,
        'QuiverItal': false,
        'Raanana': false,
        'Raanana Bold': false,
        'Raavi': false,
        'Rachana': false,
        'Rage Italic': false,
        'RaghuMalayalam': false,
        'Ravie': false,
        'Rekha': false,
        'Roboto': false,
        'Rockwell': false,
        'Rockwell Bold': false,
        'Rockwell Condensed': false,
        'Rockwell Extra Bold': false,
        'Rockwell Italic': false,
        'Rod': false,
        'Roland': false,
        'Rondalo': false,
        'Rosewood Std Regular': false,
        'RowdyHeavy': false,
        'Russel Write TT': false,
        'SF Movie Poster': false,
        'STFangsong': false,
        'STHeiti': false,
        'STIXGeneral': false,
        'STIXGeneral-Bold': false,
        'STIXGeneral-Regular': false,
        'STIXIntegralsD': false,
        'STIXIntegralsD-Bold': false,
        'STIXIntegralsSm': false,
        'STIXIntegralsSm-Bold': false,
        'STIXIntegralsUp': false,
        'STIXIntegralsUp-Bold': false,
        'STIXIntegralsUp-Regular': false,
        'STIXIntegralsUpD': false,
        'STIXIntegralsUpD-Bold': false,
        'STIXIntegralsUpD-Regular': false,
        'STIXIntegralsUpSm': false,
        'STIXIntegralsUpSm-Bold': false,
        'STIXNonUnicode': false,
        'STIXNonUnicode-Bold': false,
        'STIXSizeFiveSym': false,
        'STIXSizeFiveSym-Regular': false,
        'STIXSizeFourSym': false,
        'STIXSizeFourSym-Bold': false,
        'STIXSizeOneSym': false,
        'STIXSizeOneSym-Bold': false,
        'STIXSizeThreeSym': false,
        'STIXSizeThreeSym-Bold': false,
        'STIXSizeTwoSym': false,
        'STIXSizeTwoSym-Bold': false,
        'STIXVariants': false,
        'STIXVariants-Bold': false,
        'STKaiti': false,
        'STSong': false,
        'STXihei': false,
        'SWGamekeys MT': false,
        'Saab': false,
        'Sahadeva': false,
        'Sakkal Majalla': false,
        'Salina': false,
        'Samanata': false,
        'Samyak Devanagari': false,
        'Samyak Gujarati': false,
        'Samyak Malayalam': false,
        'Samyak Tamil': false,
        'Sana': false,
        'Sana Regular': false,
        'Sans': false,
        'Sarai': false,
        'Sathu': false,
        'Savoye LET Plain:1.0': false,
        'Sawasdee': false,
        'Script': false,
        'Script MT Bold': false,
        'Segoe MDL2 Assets': true,
        'Segoe Print': true,
        'Segoe Pseudo': false,
        'Segoe Script': true,
        'Segoe UI': true,
        'Segoe UI Emoji': true,
        'Segoe UI Historic': true,
        'Segoe UI Semilight': false,
        'Segoe UI Symbol': true,
        'Serif': false,
        'Shonar Bangla': false,
        'Showcard Gothic': false,
        'Shree Devanagari 714': false,
        'Shruti': false,
        'SignPainter-HouseScript': false,
        'Silom': false,
        'SimHei': false,
        'SimSun': true,
        'SimSun-ExtB': true,
        'Simplified Arabic': false,
        'Simplified Arabic Fixed': false,
        'Sinhala MN': false,
        'Sinhala MN Bold': false,
        'Sinhala Sangam MN': false,
        'Sinhala Sangam MN Bold': false,
        'Sitka': false,
        'Skia': false,
        'Skia Regular': false,
        'Skinny': false,
        'Small Fonts': false,
        'Snap ITC': false,
        'Snell Roundhand': false,
        'Snowdrift': false,
        'Songti SC': false,
        'Songti SC Black': false,
        'Songti TC': false,
        'Source Code Pro': false,
        'Splash': false,
        'Standard Symbols L': false,
        'Stencil': false,
        'Stencil Std': false,
        'Stephen': false,
        'Sukhumvit Set': false,
        'Suruma': false,
        'Sylfaen': true,
        'Symbol': true,
        'Symbole': false,
        'System': false,
        'System Font': false,
        'TAMu_Kadambri': false,
        'TAMu_Kalyani': false,
        'TAMu_Maduram': false,
        'TSCu_Comic': false,
        'TSCu_Paranar': false,
        'TSCu_Times': false,
        'Tahoma': true,
        'Tahoma Negreta': false,
        'TakaoExGothic': false,
        'TakaoExMincho': false,
        'TakaoGothic': false,
        'TakaoMincho': false,
        'TakaoPGothic': false,
        'TakaoPMincho': false,
        'Tamil MN': false,
        'Tamil MN Bold': false,
        'Tamil Sangam MN': false,
        'Tamil Sangam MN Bold': false,
        'Tarzan': false,
        'Tekton Pro': false,
        'Tekton Pro Cond': false,
        'Tekton Pro Ext': false,
        'Telugu MN': false,
        'Telugu MN Bold': false,
        'Telugu Sangam MN': false,
        'Telugu Sangam MN Bold': false,
        'Tempus Sans ITC': false,
        'Terminal': false,
        'Terminator Two': false,
        'Thonburi': false,
        'Thonburi Bold': false,
        'Tibetan Machine Uni': false,
        'Times': true,
        'Times Bold': false,
        'Times New Roman': true,
        'Times New Roman Baltic': false,
        'Times New Roman Bold': false,
        'Times New Roman Italic': false,
        'Times Roman': false,
        'Tlwg Mono': false,
        'Tlwg Typewriter': false,
        'Tlwg Typist': false,
        'Tlwg Typo': false,
        'TlwgMono': false,
        'TlwgTypewriter': false,
        'Toledo': false,
        'Traditional Arabic': false,
        'Trajan Pro': false,
        'Trattatello': false,
        'Trebuchet MS': true,
        'Trebuchet MS Bold': false,
        'Tunga': false,
        'Tw Cen MT': false,
        'Tw Cen MT Bold': false,
        'Tw Cen MT Italic': false,
        'URW Bookman L': false,
        'URW Chancery L': false,
        'URW Gothic L': false,
        'URW Palladio L': false,
        'Ubuntu': false,
        'Ubuntu Condensed': false,
        'Ubuntu Mono': false,
        'Ukai': false,
        'Ume Gothic': false,
        'Ume Mincho': false,
        'Ume P Gothic': false,
        'Ume P Mincho': false,
        'Ume UI Gothic': false,
        'Uming': false,
        'Umpush': false,
        'UnBatang': false,
        'UnDinaru': false,
        'UnDotum': false,
        'UnGraphic': false,
        'UnGungseo': false,
        'UnPilgi': false,
        'Untitled1': false,
        'Urdu Typesetting': false,
        'Uroob': false,
        'Utkal': false,
        'Utopia': false,
        'Utsaah': false,
        'Valken': false,
        'Vani': false,
        'Vemana2000': false,
        'Verdana': true,
        'Verdana Bold': false,
        'Vijaya': false,
        'Viner Hand ITC': false,
        'Vivaldi': false,
        'Vivian': false,
        'Vladimir Script': false,
        'Vrinda': false,
        'Waree': false,
        'Waseem': false,
        'Waverly': false,
        'Webdings': true,
        'WenQuanYi Bitmap Song': false,
        'WenQuanYi Micro Hei': false,
        'WenQuanYi Micro Hei Mono': false,
        'WenQuanYi Zen Hei': false,
        'Whimsy TT': false,
        'Wide Latin': false,
        'Wingdings': true,
        'Wingdings 2': false,
        'Wingdings 3': false,
        'Woodcut': false,
        'X-Files': false,
        'Year supply of fairy cakes': false,
        'Yu Gothic': true,
        'Yu Mincho': false,
        'Yuppy SC': false,
        'Yuppy SC Regular': false,
        'Yuppy TC': false,
        'Yuppy TC Regular': false,
        'Zapf Dingbats': false,
        'Zapfino': false,
        'Zawgyi-One': false,
        'gargi': false,
        'lklug': false,
        'mry_KacstQurn': false,
        'ori1Uni': false
    });
const getOfflineAudioCtxData = () => {
    try {
        const offlineAudioCtxClass = window.OfflineAudioContext || window['webkitOfflineAudioContext'];
        if (!offlineAudioCtxClass) {
            return -2;
        }
        const offlineAudioCtx = new offlineAudioCtxClass(1, 5000, 44100),
            oscillator = offlineAudioCtx.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.value = 10000;
        const compressor = offlineAudioCtx.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 40;
        compressor.ratio.value = 12;
        compressor.attack.value = 0;
        compressor.release.value = 0.25;
        oscillator.connect(compressor);
        compressor.connect(offlineAudioCtx.destination);
        oscillator.start(0);
        const [promise, cancelClb] = startOfflineAudioCtx(offlineAudioCtx);
        const promise1 = promise.then(audioBuffer => sumAbs(audioBuffer.getChannelData(0).subarray(4500)), reason => {
            if (reason.name === 'timeout' || reason.name === 'suspended') {
                return 'timeout';
            }
            throw reason;
        });
        promise1.catch(() => undefined);
        cancelClb();
        return promise1;
    } catch (e) {
        return -1;
    }
};

function startOfflineAudioCtx(offlineAudioCtx) {
    let cancelClb = () => undefined;
    const promise = new Promise((resolveClb, rejectClb) => {
        let flag = false,
            suspendedCount = 0,
            startTime = 0;
        offlineAudioCtx.oncomplete = offlineAudioCompletionEvent => resolveClb(offlineAudioCompletionEvent.renderedBuffer);
        const startTimeout = () => {
            setTimeout(() => rejectClb(newErrorFromStr('timeout')), Math.min(500, startTime + 5000 - Date.now()));
        };
        const render = () => {
            try {
                offlineAudioCtx.startRendering();
                switch (offlineAudioCtx.state) {
                    case 'running':
                        startTime = Date.now();
                        flag && startTimeout();
                        break;
                    case 'suspended':
                        !document.hidden && suspendedCount++;
                        flag && suspendedCount >= 3 ? rejectClb(newErrorFromStr('suspended')) : setTimeout(render, 500);
                        break;
                }
            } catch (e) {
                rejectClb(e);
            }
        };
        render();
        cancelClb = () => {
            if (!flag) {
                flag = true;
                startTime > 0 && startTimeout();
            }
        };
    });
    return [promise, cancelClb];
}

function sumAbs(float32Arr) {
    let out = 0;
    for (let i = 0; i < float32Arr.length; ++i) {
        out += Math.abs(float32Arr[i]);
    }
    return out;
}

function newErrorFromStr(errStr) {
    const err = new Error(errStr);
    err.name = errStr;
    return err;
}
const getBrowserRenderingEngine = uaName => {
        try {
            const engineMap = {
                'Chrome': 'Blink',
                'Opera': 'Blink',
                'Mozilla': 'Gecko',
                'Edge': 'Blink',
                'Safari': 'WebKit',
                'Firefox': 'Gecko',
                'Internet Explorer': 'Trident'
            };
            return engineMap[uaName] || 'Other';
        } catch (e) {
            return 'Other';
        }
    };

const getOSInfo = () => {
        try {
            const osArr = [{
                    's': 'Windows 10',
                    'r': /(Windows 10.0|Windows NT 10.0)/
                }, {
                    's': 'Windows 8.1',
                    'r': /(Windows 8.1|Windows NT 6.3)/
                }, {
                    's': 'Windows 8',
                    'r': /(Windows 8|Windows NT 6.2)/
                }, {
                    's': 'Windows 7',
                    'r': /(Windows 7|Windows NT 6.1)/
                }, {
                    's': 'Windows Vista',
                    'r': /Windows NT 6.0/
                }, {
                    's': 'Windows Server 2003',
                    'r': /Windows NT 5.2/
                }, {
                    's': 'Windows XP',
                    'r': /(Windows NT 5.1|Windows XP)/
                }, {
                    's': 'Windows 2000',
                    'r': /(Windows NT 5.0|Windows 2000)/
                }, {
                    's': 'Windows ME',
                    'r': /(Win 9x 4.90|Windows ME)/
                }, {
                    's': 'Windows 98',
                    'r': /(Windows 98|Win98)/
                }, {
                    's': 'Windows 95',
                    'r': /(Windows 95|Win95|Windows_95)/
                }, {
                    's': 'Windows NT 4.0',
                    'r': /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                }, {
                    's': 'Windows CE',
                    'r': /Windows CE/
                }, {
                    's': 'Windows 3.11',
                    'r': /Win16/
                }, {
                    's': 'Android',
                    'r': /Android/
                }, {
                    's':'Open BSD',
                    'r': /OpenBSD/
                }, {
                    's': 'Sun OS',
                    'r': /SunOS/
                }, {
                    's': 'Chrome OS',
                    'r': /CrOS/
                }, {
                    's': 'Linux',
                    'r': /(Linux|X11(?!.*CrOS))/
                }, {
                    's': 'iOS',
                    'r': /(iPhone|iPad|iPod)/
                }, {
                    's': 'Mac OS X',
                    'r': /Mac OS X/
                }, {
                    's': 'Mac OS',
                    'r': /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                }, {
                    's': 'QNX',
                    'r': /QNX/
                }, {
                    's': 'UNIX',
                    'r': /UNIX/
                }, {
                    's': 'BeOS',
                    'r': /BeOS/
                }, {
                    's': 'OS/2',
                    'r': /OS\/2/
                }, {
                    's': 'Search Bot',
                    'r': /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma | ia_archiver) /
            }];
        let _0x120cdc;
        let _0x5e8ac4 = osArr.filter(osItem => osItem['r']['test'](navigator.userAgent))[0]['s'];
        if (/Windows/ ['test'](_0x5e8ac4)) {
            _0x120cdc = /Windows (.*)/ ['exec'](_0x5e8ac4)[1];
            _0x5e8ac4 = 'Windows';
        }
        switch (_0x5e8ac4) {
            case 'Mac OS':
            case 'Mac OS X':
            case 'Android':
                _0x120cdc = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/ ['exec'](navigator.userAgent)[1];
                break;
            case 'iOS':
                _0x120cdc = /OS (\d+)_(\d+)_?(\d+)?/ ['exec'](navigator.appVersion);
                _0x120cdc = _0x120cdc[1] + '.' + _0x120cdc[2] + '.' + (_0x120cdc[3] | 0);
                break;
        }
        return {
            'name': _0x5e8ac4,
            'version': _0x120cdc
        };
    } catch (e) {
        return {
            'name': 'Unknown',
            'version': 'Unknown'
        };
    }
};
const getBrowserInfo = () => {
    try {
        const userAgent = navigator['userAgent'],
            infoArr = [{
                'name': 'Opera',
                'getInfo': arg1 => {
                    if (userAgent.indexOf('Version') !== -1) return {
                        'name': 'Opera',
                        'version': userAgent.substring(arg1 + 8)
                    };
                    return {
                        'name': 'Opera',
                        'version': userAgent.substring(arg1 + 6)
                    };
                }
            }, {
                'name': 'OPR',
                'getInfo': arg1 => {
                    return {
                        'name': 'Opera',
                        'version': userAgent.substring(arg1 + 4)
                    };
                }
            }, {
                'name': 'Edge',
                'getInfo': arg1 => {
                    return {
                        'name':'Edge',
                        'version': userAgent.substring(arg1 + 5)
                    };
                }
            }, {
                'name': 'Edg',
                'getInfo': arg1 => {
                    return {
                        'name': 'Edge',
                        'version': userAgent.substring(arg1 + 4)
                    };
                }
            }, {
                'name': 'MSIE',
                'getInfo': arg1 => {
                    return {
                        'name': 'Internet Explorer',
                        'version': userAgent.substring(arg1 + 5)
                    };
                }
            }, {
                'name': 'Chrome',
                'getInfo': arg1 => {
                    return {
                        'name': 'Chrome',
                        'version': userAgent.substring(arg1 + 7)
                    };
                }
            }, {
                'name': 'Safari',
                'getInfo': arg1 => {
                    const _0x281dce = userAgent.indexOf('Version');
                    if (_0x281dce !== -1) return {
                        'name': 'Safari',
                        'version': userAgent.substring(arg1 + 8)
                    };
                    return {
                        'name': 'Safari',
                        'version': userAgent.substring(arg1 + 7)
                    };
                }
            }, {
                'name': 'Firefox',
                'getInfo': arg1 => {
                    return {
                        'name': 'Firefox',
                        'version': userAgent.substring(arg1 + 8)
                    };
                }
            }, {
                'name': 'Trident/',
                'getInfo': () => {
                    return {
                        'name': 'Internet Explorer',
                        'version': userAgent.substring(userAgent.indexOf('rv:') + 3)
                    };
                }
            }];
        return infoArr['filter'](({
            name: _0x57d66a
        }) => userAgent.indexOf(_0x57d66a) !== -1).map(({
            getInfo: _0x376925,
            name: _0x1d7da5
        }) => _0x376925(userAgent.indexOf(_0x1d7da5)))[0];
    } catch (e) {
        return {
            'name': 'Unknown',
            'version': 'Unknown'
        };
    }
};
const getCanvas2dInfo = () => {
    try {
        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            txt = 'i9asdm..$#po((^@KbXrww!~cz';
        ctx.textBaseline = 'top';
        ctx.font = "16px 'Arial'";
        ctx.textBaseline = 'alphabetic';
        ctx.rotate(0.05);
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText(txt, 2, 15);
        ctx.fillStyle = 'rgba(102, 200, 0, 0.7)';
        ctx.fillText(txt, 4, 17);
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'blue';
        ctx.fillRect(-20, 10, 234, 5);
        const canvasDataURL = canvas.toDataURL();
        let out = 0;
        if (canvasDataURL.length === 0) return 'nothing!';
        for (let i = 0; i < canvasDataURL.length; i++) {
            const chr = canvasDataURL.charCodeAt(i);
            out = (out << 5) - out + chr;
            out = out & out;
        }
        return out;
    } catch(e) {
        return -1;
    }
};
const getWebglRenderInfoHash = () => {
    try {
        const canvasWidth = 256,
            canvasHeight = 128,
            canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const webglCtx = canvas.getContext('webgl2') ||
        	canvas.getContext('experimental-webgl2') ||
        	canvas.getContext('webgl') ||
        	canvas.getContext('experimental-webgl') ||
        	canvas.getContext('moz-webgl');
        try {
            const attrStr = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}',
                precisionStr = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}',
                glBuf = webglCtx.createBuffer();
            webglCtx.bindBuffer(webglCtx.ARRAY_BUFFER, glBuf);
            const floatsArr = new Float32Array([-0.2, -0.9, 0x0, 0.4, -0.26, 0x0, 0x0, 0.7321, 0x0]);
            webglCtx.bufferData(webglCtx.ARRAY_BUFFER, floatsArr, webglCtx.STATIC_DRAW);
            glBuf.itemSize = 3;
            glBuf.numItems = 3;
            const prog = webglCtx.createProgram();
            const vertexShader = webglCtx.createShader(webglCtx.VERTEX_SHADER);
            webglCtx.shaderSource(vertexShader, attrStr);
            webglCtx.compileShader(vertexShader);
            const fragmentShader = webglCtx.createShader(webglCtx.FRAGMENT_SHADER);
            webglCtx.shaderSource(fragmentShader, precisionStr);
            webglCtx.compileShader(fragmentShader);
            webglCtx.attachShader(prog, vertexShader);
            webglCtx.attachShader(prog, fragmentShader);
            webglCtx.linkProgram(prog);
            webglCtx.useProgram(prog);
            prog.vertexPosAttrib = webglCtx.getAttribLocation(prog, 'attrVertex');
            prog.offsetUniform = webglCtx.getUniformLocation(prog, 'uniformOffset');
            webglCtx.enableVertexAttribArray(prog.vertexPosArray);
            webglCtx.vertexAttribPointer(prog.vertexPosAttrib, glBuf.itemSize, webglCtx.FLOAT, false, 0, 0);
            webglCtx.uniform2f(prog.offsetUniform, 1, 1);
            webglCtx.drawArrays(webglCtx.TRIANGLE_STRIP, 0x0, glBuf.numItems);
        } catch (e) {
        }
        const _0x3b32d0 = new Uint8Array(canvasWidth * canvasHeight * 4);
        webglCtx.readPixels(0, 0, canvasWidth, canvasHeight, webglCtx.RGBA, webglCtx.UNSIGNED_BYTE, _0x3b32d0);
        let jsonStr = JSON.stringify(_0x3b32d0).replace(/,?"[0-9]+":/g, '');
        return produceDeterministicHashFromJson(jsonStr);
    } catch (e) {
        return '-1';
    }
};
const produceDeterministicHashFromJson = (function() {
    let a = 1,
        i,
        arr1 = [],
        arr2 = [];

    while (++a < 18) {
        for (i = a * a; i < 312; i += a) {
            arr1[i] = 1;
        }
    }

    function _0x2fb1c7(arg1, arg2) {
        return Math.pow(arg1, 1 / arg2) % 1 * 0x100000000 | 0;
    }

    for (a = 1, i = 0; a < 313;) {
        if (!arr1[++a]) {
            arr2[i] = _0x2fb1c7(a, 2);
            arr1[i++] = _0x2fb1c7(a, 3)
        }
    }

    function _0x18082b(arg1, arg2) {
        return arg1 >>> arg2 | arg1 << 32 - arg2;
    }

    function produceResultFn(jsonStr) {
        let _0xb8c1fb = arr2.slice(a = 0),
            _0x31d2b5 = unescape(encodeURI(jsonStr)),
            _0x5ec952 = [],
            _0x56ff9e = _0x31d2b5.length,
            _0x22e175 = [],
            _0x1558fb, _0x2e7183, _0x487300;
        for (; a < _0x56ff9e;) {
            _0x22e175[a >> 2] |= (_0x31d2b5.charCodeAt(a) & 255) << 8 * (3 - a++ % 4);
        }
        _0x56ff9e *= 8;
        _0x22e175[_0x56ff9e >> 5] |= 0x80 << 24 - _0x56ff9e % 32;
        _0x22e175[_0x487300 = _0x56ff9e + 64 >> 5 | 15] = _0x56ff9e;
        for (a = 0; a < _0x487300; a += 16) {
            _0x1558fb = _0xb8c1fb.slice(i = 0, 8);
            for (; i < 64; _0x1558fb[4] += _0x2e7183) {
                i < 16 ? _0x5ec952[i] = _0x22e175[i + a] : _0x5ec952[i] = (_0x18082b(_0x2e7183 = _0x5ec952[i - 2], 0x11) ^ _0x18082b(_0x2e7183, 19) ^ _0x2e7183 >>> 10) +
                (_0x5ec952[i - 7] | 0) + (_0x18082b(_0x2e7183 = _0x5ec952[i - 15], 7) ^ _0x18082b(_0x2e7183, 18) ^ _0x2e7183 >>> 3) + (_0x5ec952[i - 16] | 0);
                _0x1558fb.unshift((_0x2e7183 = (_0x1558fb.pop() + (_0x18082b(jsonStr = _0x1558fb[4], 6) ^
                _0x18082b(jsonStr, 11) ^ _0x18082b(jsonStr, 25)) + ((jsonStr & _0x1558fb[5] ^ ~jsonStr & _0x1558fb[6]) + arr1[i]) | 0) +
                (_0x5ec952[i++] | 0)) + (_0x18082b(_0x56ff9e = _0x1558fb[0], 2) ^ _0x18082b(_0x56ff9e, 0xd) ^ _0x18082b(_0x56ff9e, 0x16)) + (_0x56ff9e & _0x1558fb[0x1] ^
                _0x1558fb[0x1] & _0x1558fb[2] ^ _0x1558fb[2] & _0x56ff9e));
            }
            for (i = 8; i--;) {
                _0xb8c1fb[i] = _0x1558fb[i] + _0xb8c1fb[i];
            }
        }
        for (_0x31d2b5 = ''; i < 63;) {
            _0x31d2b5 += (_0xb8c1fb[++i >> 3] >> 4 * (7 - i % 8) & 15).toString(16);
        }
        return _0x31d2b5;
    }

    return produceResultFn;
}());
const produceDeterministicHash = serializable => produceDeterministicHashFromJson(JSON.stringify(serializable));
const getMediaDevices = async () => {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.map(device => device.kind).sort();
    } catch (e) {
        return [];
    }
};
const getAudioPropsInfo = () => {
    const audioProps = ['audio/aac', 'audio/flac', 'audio/mpeg', 'audio/mp4; codecs="mp4a.40.2"',
    	'audio/ogg; codecs="flac"', 'audio/ogg; codecs="vorbis"', 'audio/ogg; codecs="opus"',
    	'audio/wav; codecs="1"', 'audio/webm; codecs="vorbis"', 'audio/webm; codecs="opus"'];
    try {
        const audioEl = document.createElement('audio');
        return audioProps.map(audioStr => {
            return {
                'type': audioStr,
                'canPlay': audioEl.canPlayType(audioStr)
            };
        });
    } catch (e) {
        return audioProps.map(audioStr => {
            return {
                'type': audioStr,
                'canPlay': 'no info'
            };
        });
    }
};
const getVideoPropsInfo = () => {
    const videoProps = ['video/ogg; codecs="theora"', 'video/ogg; codecs="opus"', 'video/mp4; codecs="avc1.42E01E"', 'video/mp4; codecs="flac"',
    	'video/webm; codecs="vp8, vorbis"', 'video/webm; codecs="vp9"', 'application/x-mpegURL; codecs="avc1.42E01E"'];
    try {
        const videoEl = document.createElement('video');
        return videoProps.map(prop => {
            return {
                'type': prop,
                'canPlay': videoEl.canPlayType(prop)
            };
        });
    } catch (e) {
        return videoProps.map(prop => {
            return {
                'type': prop,
                'canPlay': 'no info'
            };
        });
    }
};
const getPermissionsStates = async () => {
    try {
        const props = ['accelerometer', 'camera', 'clipboard-read', 'clipboard-write',
        	'geolocation', 'background-sync', 'magnetometer', 'microphone', 'midi', 'notifications', 'payment-handler', 'persistent-storage'];
        const out = {};
        await Promise.all(props.map(async propName => {
            try {
                const { state: permissionState } = await navigator.permissions.query({ 'name': propName });
                out[propName] = permissionState;
            } catch (e) {
            }
        }));
        return out;
    } catch (e) {
        return {};
    }
};
const getWebglInfo = () => {
    try {
        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'),
            rendererInfo = ctx.getExtension('WEBGL_debug_renderer_info');
        return {
            'vendor': ctx.getParameter(rendererInfo['UNMASKED_VENDOR_WEBGL']),
            'renderer': ctx.getParameter(rendererInfo['UNMASKED_RENDERER_WEBGL']),
            'extensions': ctx.getSupportedExtensions()
        };
    } catch (e) {
        return {
            'vendor': 'Unknown',
            'renderer': 'Unknown',
            'extensions': []
        };
    }
};
const getAudioContextInfo = () => {
    try {
        const audioCtx = new AudioContext();
        return {
            'state': audioCtx['state'],
            'sampleRate': audioCtx['sampleRate'],
            'channelCount': audioCtx['destination']['channelCount'],
            'channelCountMode': audioCtx['destination']['channelCountMode'],
            'channelInterpretation': audioCtx['destination']['channelInterpretation'],
            'maxChannelCount': audioCtx['destination']['maxChannelCount'],
            'numberOfInputs': audioCtx['destination']['numberOfInputs'],
            'numberOfOutputs': audioCtx['destination']['numberOfOutputs']
        };
    } catch (e) {
        return {};
    }
};
const getFontsInfo = () => {
    const bodyEl = document.getElementsByTagName('body')[0x0],
        divEl = document.createElement('div');
    let fragmentEl = document.createDocumentFragment();
    const fontTypes = ['monospace', 'sans-serif', 'serif'];
    const fontTypesMaps = {
            'monospace': {},
            'sans-serif': {},
            'serif': {}
        };
    const className = 'fp-check-runtime-0.0.1';
    const elId = 'fp-div-check-runtime-0.0.1';
    const fontTypesOffsetWidthMap = {};
    const fontTypesOffsetHeightMap = {};
    divEl.id = elId;
    bodyEl.appendChild(divEl);
    fontTypes.forEach((fontType, fontIdx) => {
        const spanEl = document.createElement('span');
        spanEl.style.fontSize = '72px';
        spanEl.innerHTML = 'mmmmmmmmmmlli';
        spanEl.style.fontFamily = fontTypes[fontIdx];
        spanEl.style.position = 'fixed';
        spanEl.style.visibility = 'hidden';
        spanEl.classList.add(className);
        fragmentEl.appendChild(spanEl);
    });
    fontsMap.forEach(fontEl => {
        fontTypes.forEach(fontType => {
            const spanEl = document.createElement('span');
            spanEl.style.fontSize = '72px';
            spanEl.innerHTML = 'mmmmmmmmmmlli';
            spanEl.style.fontFamily = fontEl + ',' + fontType;
            spanEl.style.position = 'fixed';
            spanEl.style.visibility = 'hidden';
            spanEl.id = fontEl + '&' + fontType;
            spanEl.classList.add(className);
            fragmentEl.appendChild(spanEl);
        });
    });
    divEl.appendChild(fragmentEl);
    const divChildren = divEl.children;
    fontTypes.forEach((fontType, idx) => {
        fontTypesOffsetWidthMap[fontTypes[idx]] = divChildren[idx].offsetWidth;
        fontTypesOffsetHeightMap[fontTypes[idx]] = divChildren[idx].offsetHeight;
    });
    for (let i = 0; i < divChildren.length; i++) {
        const [splitPart1, splitPart2] = divChildren[i].id.split('&');
        splitPart2 && (fontTypesMaps[splitPart2][splitPart1] = divChildren[i]);
    }
    const out = [];
    for (let i = 0; i < fontsMap.length; i++) {
        for (let j = 0; j < fontTypes.length; j++) {
            let _0x28e2cc = fontTypesMaps[fontTypes[j]][fontsMap[i]];
            const isValid =
                _0x28e2cc.offsetWidth !== fontTypesOffsetWidthMap[fontTypes[j]] ||
                _0x28e2cc.offsetHeight !== fontTypesOffsetHeightMap[fontTypes[j]];
            if (isValid) {
                out.push(fontsMap[i]);
                break;
            }
        }
    }
    document.getElementById(elId).remove();
    return out;
};
const getPluginsInfo = () => {
    try {
        const pluginsArr = [];
        for (let i = 0; i < navigator.plugins.length; i++) {
            pluginsArr.push(navigator.plugins[i].name);
        }
        return pluginsArr;
    } catch (e) {
        return [];
    }
};
const get27RandCharsFn = arg1 => {
    return new Array(arg1).fill(0).map(() => Math.random().toString(36).substr(2, 9)).reduce((arg2, arg3) => arg2 + arg3, '');
};
const a0_0x40b8a4 = () => Math.floor(Math.random() * 10000) + 1;
const getherAllInfo = async () => {
    const browserInfo = getBrowserInfo(),
        osInfo = getOSInfo(),
        webglInfo = getWebglInfo(),
        promises = await Promise.all([getPermissionsStates(), getMediaDevices(), getOfflineAudioCtxData()]);
    return {
        'dg': 8,
        'dO4': Intl['DateTimeFormat']()['resolvedOptions']()['timeZone'],
        'ZNJG': navigator['doNotTrack'] || false,
        'cOJRtSqNAQ': getBrowserRenderingEngine(browserInfo['name']),
        'b-I2rx-E': osInfo['name'],
        'YdFB': browserInfo['name'],
        'dttJrRyO': navigator['vendor'],
        'bdI_': navigator['deviceMemory'] || 0x0,
        'Y9JA': navigator['hardwareConcurrency'] || 0x0,
        'bM07og': navigator['languages']['join'](','),
        'cNxRuCGPAg': produceDeterministicHash(getPluginsInfo()),
        'Z9dM': webglInfo['vendor'] + ',' + webglInfo['renderer'],
        'ZtVDtyo': produceDeterministicHash(getFontsInfo()),
        'YdY6oxJV': produceDeterministicHash(getAudioContextInfo()),
        'b-I4nQ-C61rI': osInfo['version'],
        'd-BEuCA': window['screen']['availWidth'],
        'aM02nQV5': window['screen']['availHeight'],
        'ZMk5rRU': window['screen']['colorDepth'],
        'bL8zohR5': Boolean(localStorage),
        'c8Y6qRuA': Boolean(sessionStorage),
        'dt9DqBc': produceDeterministicHash(getVideoPropsInfo()),
        'YdY6oxI': produceDeterministicHash(getAudioPropsInfo()),
        'bdI2nwA': produceDeterministicHash(promises[1]),
        'cNVHtB2QA2zbSbw': produceDeterministicHash(promises[0]),
        'YdY6oxJYqA': promises[2],
        'd9w-pRFXpw': getWebglRenderInfoHash(),
        'Y8QyqAl8whI': getCanvas2dInfo(),
    };
};

function dictToArr(arg1) {
    const consts = ['dg', 'dO4', 'ZNJG', 'cOJRtSqNAQ', 'b-I2rx-E', 'YdFB', 'dttJrRyO', 'bdI_', 'Y9JA', 'bM07og',
    	'cNxRuCGPAg', 'Z9dM', 'ZtVDtyo', 'YdY6oxJV', 'd-BEuCA', 'aM02nQV5', 'ZMk5rRU', 'bL8zohR5', 'c8Y6qRuA', 'dt9DqBc', 'YdY6oxI',
    	'bdI2nwA','cNVHtB2QA2zbSbw', 'YdY6oxJYqA', 'd9w-pRFXpw', 'Y8QyqAl8whI', 'Y9U6mw9451U', 'depTtw', 'ZA', 'b-I4nQ-C61rI', 'dts-siGT',
    	'dehNvwBnzDqu', 'c9hKwCWX61TBJm_dKn0', 'ctdIvSKVCQ'];
    let out = [];
    consts.forEach(el => {
        out.push(arg1[el]);
        delete arg1[el];
    })
    return out;
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

function decrypt(arg1) {
    let reverseRetardPseudoB64Encoding = function(arg1) {
        let extraPadding = 0;
        while (arg1.length % 4 !== 0) {
            arg1 += "A";
            extraPadding++;
        }
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='['split']('');
        let sb = '';
        for (let i = 0; i < arg1.length;) {
            const first = chars.indexOf(arg1[i++]),
                second = chars.indexOf(arg1[i++]),
                third = chars.indexOf(arg1[i++]),
                fourth = chars.indexOf(arg1[i++]);
            const tmpp = (first << 18) | (second << 12) | (third << 6) | fourth
            sb += String.fromCharCode(tmpp >> 16 & 255) + String.fromCharCode(tmpp >> 8 & 255) + String.fromCharCode(tmpp & 255);
        }
        if (extraPadding > 0) {
            sb = sb.slice(0, -extraPadding);
        }
        return sb;
    };

    arg1 = reverseRetardPseudoB64Encoding(arg1)
    let sb = "";
    for (let i = arg1.length-2; i >= 0; i--) {
        sb = String.fromCharCode(((arg1.charCodeAt(i+1) + 256) - arg1.charCodeAt(i)) % 256) + sb;
    }
    sb = arg1[0] + sb;
    return decodeURIComponent(sb);
}

let game1 = async function(clb, arg2 = null) {
    let nowTimestamp = new Date().getTime(),
        xGame = localStorage.getItem('x-game'),
        randCharFn = () => String.fromCharCode(32 + Math.random() * 94 | 0),
        part1CharsArr,
        part2Int;
    try {
        let xVec = localStorage.getItem("x-vec");
        let spaceIdx = xVec.lastIndexOf(' ');
        part1CharsArr = xVec.substr(0, spaceIdx).split('');
        part2Int = parseInt(xVec.substr(spaceIdx + 1));
    } catch (e) {
        part1CharsArr = Array.from(Array(100), () => randCharFn());
        part2Int = nowTimestamp;
    }

    let newXVec = part1CharsArr.join('') + ' ' + part2Int;
    localStorage.setItem('x-vec', newXVec);
    if (part2Int + 1000 < nowTimestamp) {
        part1CharsArr.shift();
        part1CharsArr.push(randCharFn());
        newXVec = part1CharsArr.join('') + ' ' + nowTimestamp;
        localStorage.setItem("x-vec", newXVec);
    }
    if (!xGame) {
        xGame = get27RandCharsFn(3);
        localStorage.setItem('x-game', xGame)
    }
    let objToEncrypt = await getherAllInfo();
    objToEncrypt['Y9U6mw9451U'] = new Date().toISOString();
    objToEncrypt['depTtw'] = xGame;
    objToEncrypt['dts-siGT'] = window.btoa(newXVec);
    objToEncrypt['ZA'] = new Date().getTime() - nowTimestamp;
    try {
        const httpReq = new XMLHttpRequest();
        httpReq.open('GET', 'https://gameforge.com/tra/game1.js', false);
        httpReq.send(null);
        objToEncrypt['c9hKwCWX61TBJm_dKn0'] = new Date(httpReq.getResponseHeader('date')).toISOString();
    } catch (e) {
        const now = new Date();
        now.setDate(now.getDate() - 14);
        objToEncrypt['c9hKwCWX61TBJm_dKn0'] = now.toISOString();
    }
    objToEncrypt['dehNvwBnzDqu'] = navigator.userAgent;
    objToEncrypt['ctdIvSKVCQ'] = arg2;
    let arrToEncrypt = dictToArr(objToEncrypt);
    let jsonEncoded = JSON.stringify(arrToEncrypt);
    let encrypted = encrypt(jsonEncoded);
    clb(encrypted);
};