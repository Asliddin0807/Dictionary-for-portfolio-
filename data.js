let mas = [
    { text: 'afraid', translate: "qo'rqmoq" },
    { text: 'agree', translate: "rozi bo'lmoq" },
    { text: 'angry', translate: 'jahlda' },
    { text: 'arrive', translate: 'yetib kelmoq' },
    { text: 'attack', translate: 'hujum qilmoq' },
    { text: 'bottom', translate: "tagi osti" },
    { text: 'clever', translate: 'aqlli' },
    { text: 'cruel', translate: 'shafqatsiz' },
    { text: 'finally', translate: 'nihoyat' },
    { text: 'hide', translate: 'yashirmoq' },
    { text: 'hunt', translate: 'ovlamoq' },
    { text: 'lot', translate: "ko'p" },
    { text: 'middle', translate: " o'rta" },
    { text: 'moment', translate: 'lahza' },
    { text: 'pleased', translate: 'mamnun' },
    { text: 'promise', translate: "va'da bermoq" },
    { text: 'reply', translate: 'javob bermoq' },
    { text: 'safe', translate: 'xavfsiz' },
    { text: 'trick', translate: 'hiyla' },
    { text: 'well', translate: 'yaxshi' },
    { text: 'adventure', translate: 'sarguzasht' },
    { text: 'approach', translate: 'yaqinlashmoq' },
    { text: 'chemical', translate: 'kimyoviy' },
    { text: 'create', translate: 'yaratmoq' },
    { text: 'carefully', translate: 'ehtiyotkorlik bilan' },
    { text: 'evil', translate: 'yomonlik' },
    { text: 'experiment', translate: 'tajriba' },
    { text: 'kill', translate: "o'ldirmoq" },
    { text:"experiment",  translate: "tajriba" },
    { text: "kill",  translate: "o'ldirmoq" },
    { text: "laboratory",  translate: "laboratoriya" },
    { text: "laugh",  translate: "kulmoq" },
    { text: "loud",  translate: "baland ovozda" },
    { text: "nervous",  translate: "asabiy" },
    { text: "noise",  translate: "shovqin" },
    { text: "project",  translate: "loyiha" },
    { text: "scare",  translate: "qo'rqitmoq" },
    { text: "secret",  translate: "sir" },
    { text: "shout",  translate: "baqirmoq" },
    { text: "smell",  translate: "hid" },
    { text: "terrible",  translate: "qo'rqinchli" },
    { text: "worse",  translate: "yomonroq" },
    { text: "alien",  translate: "begona" },
    { text: "among",  translate: "orasida" },
    { text: "chart",  translate: "grafik, jadval" },
    { text: "cloud", translate: "bulut" },
    { text: "comprehend",  translate: "tushunmoq" },
    { text: "describe",  translate: "ta'riflamoq" },
    { text: "ever",  translate: "qachon bo'lsa ham"},
    { text: "fail", translate: "muvaffaqiyatsizlikka"},
    { text: "friendly",  translate: "do'stona" },
    { text: "grade",  translate: "baho" },
    { text: "instead",  translate: "o'rniga" },
    { text: "library",  translate: "kutubxona" },
    { text: "planet",  translate: "sayyora" },
    { text: "report",  translate: "hisobot" },
    { text: "several", translate: "bir nechta" },
    { text: "solve",  translate: "hal qilmoq" },
    { text: "suddenly",  translate: "to'satdan" },
    { text: "suppose",  translate: "faraz qilmoq" },
    { text: "universe",  translate: "olam" },
    { text: "view",  translate: "ko'rinish" },
    { text: "appropriate",  translate: "muvofiq" },
    { text: "avoid",  translate: "oldini olmoq" },
    { text: "calm",  translate: "sokin" },
    { text: "concern",  translate: "tashvishlanmoq" },
    { text: "content",  translate: "mamnun" },
    { text: "expect",  translate: "kutmoq" },
    { text: "frequently",  translate: "tez" },
    { text: "habit",  translate: "odat" },
    { text: "instruct",  translate: "ko'rsatma bermoq" },
    { text: "issue", translate: "masala" },
    { text: "none", translate: "hech biri" },
    { text: "patient", translate: "sabrli" },
    { text: "positive", translate: "ijobiy" },
    { text: "punish", translate: "jazolamoq" },
    { text: "represent", translate: "vakillik qilmoq" },
    { text: "shake", translate: "silkitmoq" },
    { text: "spread", translate: "tarqalmoq" },
    { text: "stroll", translate: "sayrga chiqmoq" },
    { text: "village", translate: "qishloq" },
    { text: "badly", translate: "yomon" },
    { text: "belong", translate: "tegishli bo'lmoq" },
    { text: "continue", translate: "davom etmoq" },
    { text: "error", translate: "xato" },
    { text: "experience", translate: "tajriba" },
    { text: "field", translate: "maydon" },
    { text: "hurt", translate: "jarohat olmoq" },
    { text: "judgment", translate: "hukm baho" },
    { text: "likely", translate: "ehtimol" },
    { text: "normal", translate: "oddiy" },
    { text: "rare", translate: "noyob" },
    { text: "relax", translate: "rohatlanmoq" },
    { text: "request", translate: "so'ramoq" },
    { text: "reside", translate: "yashamoq" },
    { text: "result", translate: "natija" },
    { text: "roll", translate: "dumalamoq" },
    { text: "since", translate: "chunki" },
    { text: "visible", translate: "ko'rinadigan" },
    { text: "wild", translate: "yovvoyi" },
    { text: "afzallik", translate: "advantage" },
    { text: "cause", translate: "sababi" },
    { text: "choice", translate: "tanlov" },
    { text: "community", translate: "jamoa" },
    { text: "dead", translate: "o'lik" },
    { text: "distance",  translate: "masofa" },
    { text: "escape", translate: "qochmoq" },
    { text: "face", translate: "yuz"},
    { text: "follow", translate: "amal qilmoq, ortidan" },
    { text: "fright", translate: "qo'rquv" },
    { text: "ghost", translate: "arvoh" },
    { text: "individual", translate: "shaxs" },
    { text: "pet", translate: "uy hayvoni" },
    { text: "reach", translate: "erishmoq, yetib" },
    { text: "return", translate: "qaytmoq" },
    { text: "survive", translate: "omon qolmoq" },
    { text: "upset", translate: "xafa" },
    { text: "voice", translate: "ovoz" },
    { text: "weather", translate: "ob havo" },
    { text: "wise", translate: "dono" },
    {text: "announce", translate: "e'lon qilmoq" },
    {text: "beside", translate: "yonida" },
    {text: "challenge", translate: "qiyinchilik" },
    {text: "claim", translate: "takidlamoq" },
    {text: "condition", translate: "holat" },
    {text: "contribute", translate: "hissa qo'shmoq "},
    {text: "difference", translate: "farq" },
    {text: "divide", translate: "bo'lmoq" },
    {text: "expert", translate: "mutaxassis" },
    {text: "famous", translate: "mashhur" },
    {text: "force", translate: "kuch" },
    {text: "harm", translate: "zarar"  },
    {text: "lay",  translate: "yotadi" },
    {text: "peace", translate: "tinchlik"  },
    {text: "prince", translate: "shahzoda" },
    {text: "protect", translate: "himoya qilmoq" },
    {text: "sense", translate: "ma'no" },
    {text: "sudden", translate: "to'satdan" },
    {text: "therefore", translate: "shuning uchun" },
    {text:" accept", translate: "qabul qilmoq" },
    {text: "arrange", translate: "tartibga solmoq" },
    {text: "attend", translate: "qatnashmoq" },
    {text: "balance", translate: "muvozanat" },
    {text: "contrast", translate: "farq" },
    {text: "encourage", translate: "rag'batlantirmoq" },
    {text: "familiar", translate: "tanish" },
    {text: "grab", translate: "changallamoq" },
    {text: "hang", translate: "osib qo'ymoq" },
    {text: "huge", translate: "katta" },
    {text: "necessary", translate: "zarur" },
    {text: "pattern", translate: "naqsh, tartib" },
    {text: "propose", translate: "taklif qilmoq" },
    {text: "purpose", translate: "maqsad" },
    {text: "release",  translate: "ozod qilmoq" },
    { text: "require", translate: "talab qilmoq" },
    { text: "single", translate: "yakka" },
    { text: "success", translate: "muvaffaqiyat" },
    { text: "tear", translate: "ko'z yoshi, yirtmoq" },
    { text: "theory", translate: "nazariya" },
    { text: "against", translate: "qarshi" },
    { text: "beach", translate: "sohil" },
    { text: "damage", translate: "zarar" },
    { text: "discover", translate: "kashf qilmoq" },
    { text: "emotion", translate: "hissiyot" },
    { text: "fix", translate: "tuzatmoq" },
    {text: "frank",      translate: "samimiy" },
    {text: "identify",   translate: "aniqlash" },
    {text: "island",     translate: "orol" },
    {text: "ocean",      translate: "okean" },
    {text: "perhaps",    translate: "ehtimol" },
    {text: "pleasant",   translate: "yoqimli" },
    {text: "prevent",    translate: "oldini olmoq" },
    {text: "rock",       translate: "tosh" },
    {text: "save",       translate: "asramoq" },
    {text: "step",       translate: "qadam" },
    {text: "still",      translate: "hali ham" },
    {text: "taste",      translate: "ta'm, tatib ko'rmoq" },
    {text: "throw",      translate: "otmoq" },
    {text: "wave",       translate: "to'lqin" },
    {text: "benefit",    translate: "foyda" },
    { text: "certain", translate: "aniq" },
    { text: "chance", translate: "imkoniyat" },
    { text: "effect", translate: "ta'sir" },
    { text: "essential", translate: "muhim" },
    { text: "far", translate: "uzoq" },
    { text: "focus", translate: "diqqat markazi" },
    { text: "function", translate: "vazifa" },
    { text: "grass", translate: "o't" },
    { text: "guard", translate: "qo'riqchi" },
    { text: "image", translate: "rasm" },
    { text: "immediate", translate: "darhol" },
    { text: "primary", translate: "asosiy" },
    { text: "proud", translate: "mag'rur" },
    { text: "remain", translate: "qolmoq" },
    { text: "rest", translate: "dam olmoq," },
    { text: "separate", translate: "alohida" },
    { text: "site", translate: "joy" },
    { text: "tail", translate: "dum" },
    { text: "trouble", translate: "muammo" },
    { text: "anymore", translate: "endi qaytib" },
    { text: "asleep", translate: "uyquda" },
    { text: "berry", translate: "maymunjon" },
    { text: "collect", translate: "to'plamoq" },
    { text: "compete", translate: "raqobatlashmoq" },
    { text: "conversation", translate: "suhbat" },
    { text: "creature", translate: "jonzot" },
    { text: "decision", translate: "qaror" },
    { text: "either", translate: "yoki" },
    { text: "forest", translate: "o'rmon" },
    { text: "ground",  translate: "yer" },
    { text: "introduce",  translate: "tanishtirmoq" },
    { text: "marry",  translate: "turmush qurmoq" },
    { text: "prepare",  translate: "tayyorlamoq" },
    { text: "sail",  translate: "suzmoq" },
    { text: "serious",  translate: "jiddiy" },
    { text: "spend",  translate: "sarflamoq" },
    { text: "strange",  translate: "g'alati" },
    { text: "truth",  translate: "haqiqat" },
    { text: "wake",  translate: "uyg'otmoq" },
    { text: "alone",  translate: "yolg'iz" },
    { text: "apartment",  translate: "xonadon" },
    { text: "article",  translate: "maqola" },
    { text: "artist",  translate: "rassom" },
    { text: "attitude",  translate: "munosabat" },
    { text: "compare",  translate: "solishtirmoq" },
    { text: "judge",  translate: "hukm qilmoq" },
    { text: "magazine",  translate: "jurnal" },
    { text: "material",  translate: "ashyo" },
    { text: "meal",  translate: "ovqat" },
    { text: "method",  translate: "uslub" },
    { text: "neighbor", translate: "qo'shni" },
    { text: "professional", translate: "professional" },
    { text: "profit",  translate: "foyda" },
    { text: "quality",  translate: "sifat" },
    { text: "shape",  translate: "shakl" },
    { text: "space",  translate: "bo'shliq" },
    { text: "stair",  translate: "zina" },
    { text: "symbol",  translate: "belgi" },
    { text: "thin",  translate: "oriq" },
    { text: "blood",  translate: "qon" },
    { text: "burn",  translate: "kuymoq" },
    { text: "cell",  translate: "hujayra, panjara" },
    { text: "contain",  translate: "o'z ichiga olmoq" },
    { text: "correct",  translate: "to'g'ri" },
    { text: "crop",  translate: "ekin" },
    { text: "demand",  translate: "talab" },
    { text: "equal",  translate: "teng" },
    { text: "feed",  translate: "boqmoq" },
    { text: "hole",  translate: "teshik" },
    { text: "increase",  translate: "o'smoq" },
    { text: "lord", translate: "lord" },
    { text: "owe", translate: "qarzdor" },
    { text: "position", translate: "orin" },
    { text: "raise", translate: "oshirmoq" },
    { text: "responsible", translate: "mas'ul" },
    { text: "sight", translate: "ko'rish" },
    { text: "spot", translate: "dog` joy" },
    { text: "structure", translate: "tuzilish" },
    { text: "whole", translate: "butun" },
    { text: "coach", translate: "murabbiy" },
    { text: "control", translate: "boshqaruv" },
    { text: "description", translate: "tushuntirish" },
    { text: "direct", translate: "to'g'ridan-to'g'ri" },
    { text: "exam", translate: "imtihon" },
    { text: "example", translate: "misol" },
    { text: "limit", translate: "chegara" },
    { text: "local", translate: "mahalliy" },
    { text: "magical", translate: "sehrli" },
    { text: "mail", translate: "pochta" },
    { text: "novel", translate: "roman" },
    { text: "outline", translate: "reja" },
    { text: "poet", translate: "shoir" },
    { text: "print", translate: "bosib chiqarmoq" },
    { text: "scene", translate: "sahna" },
    { text: "sheet", translate: "varoq" },
    { text: "silly", translate: "ahmoqona" },
    { text: "store", translate: "do'kon saqlamoq" },
    { text: "suffer", translate: "azoblanmoq" },
    { text: "technology", translate: "texnologiya" },
    { text: "across", translate: "kesib" },
    { text: "breathe", translate: "nafas olmoq" },
    { text: "characteristic", translate: "xususiyat" },
    { text: "consume", translate: "iste'mol qilmoq" },
    { text: "excite", translate: "hayratlanmoq" },
    { text: "extreme", translate: "haddan tashqari" },
    { text: "fear", translate: "qo'rquv" },
    { text: "fortunate", translate: "baxtli" },
    { text: "happen", translate: "sodir bo'lmoq" },
    { text: "length",   translate: "uzunlik" },
    { text: "mistake",  translate: "xato" },
    { text: "observe",  translate: "kuzatmoq" },
    { text: "opportunity", translate: "imkoniyat" },
    { text: "prize",  translate: "sovrin" },
    { text: "race",  translate: "irq" },
    { text: "realize", translate: "tushunmoq" },
    { text: "respond", translate: "javob bermoq" },
    { text: "risk", translate: "xavf" },
    { text: "wonder", translate: "hayron bo`lmoq" },
    { text: "yet", translate: "hali" },
    { text: "academy", translate: "akademiya" },
    { text: "ancient",  translate: "qadimiy" },
    { text: "board",  translate: "taxta" },
    { text: "century", translate: "asr" },
    { text: "clue", translate: "qo`shimcha ma`lumot" },
    { text: "concert", translate: "kontsert" },
    { text: "county", translate: "graflik" },
    { text: "dictionary", translate: "lug'at" },
    { text: "exist", translate: "mavjud" },
    { text: "flat",translate: "tekis" },
    { text: "gentleman", translate: "jentleman" },
    { text: "hidden", translate: "maxfiy" },
    { text: "maybe", translate: "balki" },
    { text: "officer", translate: "ofitser" },
    { text: "original", translate: "original" },
    { text: "pound", translate: "funt qoqmoq" },
    { text: "process", translate: "jarayon" },
    { text: "publish", translate: "nashr etmoq" },
    { text: "theater", translate: "teatr" },
    { text: "wealth", translate: "boylik" },
    { text: "appreciate", translate: "qadrlamoq" },
    { text: "available", translate: "mavjud" },
    { text: "beat", translate: "urmoq" },
    { text: "bright", translate: "yorqin" },
    { text: "celebrate", translate: "nishonlamoq" },
    { text: "determine", translate: "aniqlamoq" },
    { text: "disappear", translate: "yo'qolmoq" },
    { text: "else", translate: "yana boshqa" },
    { text: "fair", translate: "adolatli" },
    { text: "flow", translate: "oqim" },
    { text: "forward", translate: "oldinga" },
    { text: "hill", translate: "tepalik" },
    { text: "level", translate: "daraja" },
    { text: "lone", translate: "yolg'iz" },
    { text: "puddle", translate: "ko'lmak" },
    { text: "response", translate: "javob" },
    { text: "season", translate: "mavsum" },
    { text: "solution", translate: "yechim" },
    { text: "waste", translate: "chiqindi" },
    { text: "whether", translate: "mi yoki" },
    { text: "argue", translate: "bahslashmoq" },
    { text: "communicate",translate: "muloqot" },
    { text: "crowd", translate: "olomon" },
    { text: "depend", translate: "qaram bo`lmoq" },
    { text: "dish", translate: "ovqat" },
    { text: "empty", translate: "bo'sh" },
    { text: "exact", translate: "aniq" },
    { text: "fresh",translate: "yangi" },
    { text: "gather", translate: "to'plamoq" },
    { text: "indicate", translate: "ko`rsatmoq" },
    { text: "item", translate: "buyum" },
    { text: "offer", translate: "taklif qilmoq" },
    { text: "price", translate: "narx" },
    { text: "product", translate: "mahsulot" },
    { text: "property", translate: "mulk" },
    { text: "purchase", translate: "sotib olmoq" },
    { text: "recommend", translate: "tavsiya qilmoq" },
    { text: "select", translate: "tanlamoq" },
    { text: "tool", translate: "asbob" },
    { text: "treat", translate: "davolamoq," },
    { text: "alive", translate: "tirik" },
    { text: "bone", translate: "suyak" },
    { text: "bother",  translate: "bezovta qilmoq" },
    { text: "captain",  translate: "kapitan" },
    { text: "conclusion",  translate: "xulosa" },
    { text: "doubt",  translate: "shubha" },
    { text: "explore",  translate: "kashf qilmoq" },
    { text: "foreign",  translate: "xorijiy" },
    { text: "glad",  translate: "mamnun" },
    { text: "however",  translate: "biroq" },
    { text: "injustice",  translate: "adolatsizlik" },
    { text: "international",  translate: "xalqaro" },
    { text: "lawyer",  translate: "yurist" },
    { text: "mention",  translate: "eslatmoq" },
    { text: "policy",  translate: "siyosat" },
    { text: "social",  translate: "ijtimoiy" },
    { text: "speech",  translate: "nutq" },
    { text: "staff",  translate: "xodimlar" },
    { text: "toward",  translate: "tomonga" },
    { text: "wood",  translate: "yog'och" },
    { text: "achieve",  translate: "erishmoq" },
    { text: "advise",  translate: "maslahat bermoq" },
    { text: "already",  translate: "allaqachon" },
    { text: "basic",  translate: "asosiy" },
    { text: "bit",  translate: "bo'lak" },
    { text: "consider",  translate: "o'ylab ko'rmoq" },
    { text: "destroy",  translate: "yo'q qilmoq" },
    { text: "entertain",  translate: "ko'nglini ko'tarmoq" },
    { text: "extra",  translate: "qo'shimcha" },
    { text: "goal",  translate: "maqsad" },
    { text: "lie",  translate: "yolg'on gapirmoq" },
    { text: "meat",  translate: "go'sht" },
    { text: "opinion",  translate: "fikr" },
    { text: "real",  translate: "haqiqiy" },
    { text: "reflect",  translate: "aks ettirmoq" },
    { text: "regard",  translate: "deb bilmoq" },
    { text: "serve", translate: "xizmat qilmoq" },
    { text: "vegetable", translate: "sabzavot" },
    { text: "war", translate: "urush" },
    { text: "worth", translate: "qiymat" },
    { text: "appear", translate: "paydo bo'lmoq" },
    { text: "base", translate: "tayanch" },
    { text: "brain", translate: "miya" },
    { text: "career", translate: "martaba" },
    { text: "clerk", translate: "xizmatchi" },
    { text: "effort", translate: "harakat" },
    { text: "enter", translate: "kirmoq" },
    { text: "excellent", translate: "ajoyib" },
    { text: "hero", translate: "qahramon" },
    { text: "hurry", translate: "shoshilmoq" },
    { text: "inform", translate: "axborot bermoq" },
    { text: "later", translate: "keyinchalik" },
    { text: "leave", translate: "tashlab ketmoq" },
    { text: "locate", translate: "topmoq" },
    { text: "nurse", translate: "hamshira" },
    { text: "operation", translate: "operatsiya" },
    { text: "pain", translate: "og'riq" },
    { text: "refuse", translate: "rad qilmoq" },
    { text: "though", translate: "garchi" },
    { text: "various", translate: "turli" },
    { text: "actual", translate: "dolzarb haqiqiy" },
    { text: "amaze", translate: "hayratlantirmoq" },
    { text: "charge", translate: "zaryad" },
    { text: "comfort", translate: "farovonlik" },
    { text: "contact", translate: "traaloqa qilmoq" },
    { text: "customer", translate: "mijoz" },
    { text: "deliver", translate: "yetkazib bermoq" },
    { text: "earn", translate: "ishlab topmoq" },
    { text: "gate", translate: "darvoza" },
    { text: "include", translate: "qo'shib qo'ymoq" },
    { text: "manage", translate: "boshqarmoq" },
    { text: "mystery", translate: "sinoat" },
    { text: "occur", translate: "uchramoq" },
    { text: "opposite", translate: "aks qarama-qarshi" },
    { text: "plate", translate: "likop" },
    { text: "receive", translate: "qabul qilmoq" },
    { text: "reward", translate: "sovrin" },
    { text: "set", translate: "qo'ymoq o'rnatmoq" },
    { text: "steal", translate: "o'g'irlamoq" },
    { text: "thief", translate: "o'g'ri" },
    { text: "advance", translate: "odimlamoq" },
    { text: "athlete", translate: "sportchi" },
    { text: "average", translate: "o'rtacha" },
    { text: "behavior", translate: "hatti-harakat" },
    { text: "behind", translate: "orqasida" },
    { text: "course", translate: "yo'nalish kurs" },
    { text: "lower", translate: "pasaytirmoq" },
    { text: "match", translate: "o'yin" },
    { text: "member", translate: "a'zo" },
    { text: "mental", translate: "aqliy" },
    { text: "passenger", translate: "yo'lovchi" },
    { text: "personality", translate: "shaxsiyat" },
    { text: "poem", translate: "she'r" },
    { text: "pole", translate: "qutb, asos" },
    { text: "remove", translate: "olib tashlash" },
    { text: "safety", translate: "xavfsizlik" },
    { text: "shoot", translate: "otmoq" },
    { text: "sound", translate: "ovoz" },
    { text: "swim", translate: "suzmoq" },
    { text: "web", translate: "o'rgimchak to'ri" },
    { text: "block", translate: "bo'lak" },
    { text: "cheer", translate: "hayqiriq" },
    { text: "complex", translate: "murakkab" },
    { text: "critic", translate: "tanqidchi" },
    { text: "event", translate: "voqea" },
    { text: "exercise", translate: "mashq qilmoq" },
    { text: "fit", translate: "mos kelmoq" },
    { text: "friendship", translate: "do'stlik" },
    { text: "guide", translate: "yo'l ko'rsatuvchi" },
    { text: "lack", translate: "kamchilik" },
    { text: "passage", translate: "yo'lak" },
    { text: "perform", translate: "ijro etmoq" },
    { text: "pressure", translate: "bosim" },
    { text: "probable", translate: "ehtimol" },
    { text: "public", translate: "jamoat" },
    { text: "strike", translate: "urmoq" },
    { text: "support", translate: "qo'llab-quvvatlamoq" },
    { text: "task", translate: "vazifa" },
    { text: "term", translate: "muddat" },
    { text: "unite", translate: "birlashtirmoq" },
    { text: "associate", translate: "bog'lamoq" },
    { text: "environment", translate: "atrof-muhit" },
    { text: "factory", translate: "zavod" },
    { text: "feature", translate: "xususiyat" },
    { text: "instance", translate: "misol" },
    { text: "involve", translate: "mashg'ul bo'lmoq" },
    { text: "medicine", translate: "dori" },
    { text: "mix", translate: "aralashtirmoq" },
    { text: "organize", translate: "tashkillashtirmoq" },
    { text: "period", translate: "davr" },
    { text: "populate", translate: "yashamoq" },
    { text: "produce", translate: "ishlab chiqarmoq" },
    { text: "range", translate: "bir qator tur" },
    { text: "recognize", translate: "tanimoq" },
    { text: "regular", translate: "muntazam" },
    { text: "sign", translate: "belgi" },
    { text: "tip", translate: "uch" },
    { text: "tradition", translate: "an'ana" },
    { text: "trash", translate: "axlat" },
    { text: "wide", translate: "keng" },
    { text: "advice", translate: "maslahat" },
    { text: "along", translate: "davomida" },
    { text: "attention", translate: "diqqat" },
    { text: "attract", translate: "jalb qilmoq" },
    { text: "climb", translate: "ko'tarilmoq" },
    { text: "drop", translate: "tomchi" },
    { text: "final", translate: "oxirgi" },
    { text: "further", translate: "uzoqroq" },
    { text: "imply", translate: "shama qilmoq" },
    { text: "maintain", translate: "saqlamoq" },
    { text: "neither", translate: "na" },
    { text: "otherwise", translate: "aks holda" },
    { text: "physical", translate: "jismoniy" },
    { text: "prove", translate: "isbotlamoq" },
    { text: "react", translate: "javob bermoq" },
    { text: "ride", translate: "uchmoq" },
    { text: "situated", translate: "joylashgan" },
    { text: "society", translate: "jamiyat" },
    { text: "standard",  translate: "standart" },
    { text: "suggest" , translate: "taklif qilmoq" },
    { text: "alien", translate: "begona" },
    { text: "among", translate: "orasida" },
    { text: "chart", translate: "grafik ,jadval" },
    { text: "cloud", translate: "bulut" },
    { text: "comprehend", translate: "tushunmoq" },
    { text: "describe", translate: "ta'riflamoq" },
    { text: "ever", translate: "qachon bo'lsa ham" },
    { text: "fail", translate: "muvaffaqiyatsizlikka uchramoq" },
    { text: "friendly", translate: "do'stona" },
    { text: "grade", translate: "baho" },
    { text: "instead", translate: "o'rniga" },
    { text: "library", translate: "kutubxona" },
    { text: "planet", translate: "sayyora" },
    { text: "report", translate: "hisobot" },
    { text: "several", translate: "bir nechta" },
    { text: "solve", translate: "hal qilmoq" },
    { text: "suddenly", translate: "to'satdan" },
    { text: "suppose", translate: "faraz qilmoq" },
    { text: "universe", translate: "olam" },
    { text: "view", translate: "ko'rinish" },
    { text: "appropriate", translate: "muvofiq" },
    { text: "avoid", translate: "oldini olmoq saqlanmoq" },
    { text: "behave", translate: "o'zini tutmoq" },
    { text: "calm", translate: "sokin" },
    { text: "concern", translate: "tashvishlanmoq" },
    { text: "content", translate: "mamnun" },
    { text: "expect", translate: "kutmoq" },
    { text: "frequently", translate: "tez-tez" },
    { text: "habit", translate: "odat" },
    { text: "instruct", translate: "ko'rsatma bermoq" },
    { text: "issue", translate: "masala" },
    { text: "none", translate: "hech biri" },
    { text: "patient", translate: "sabrli" },
    { text: "positive", translate: "ijobiy" },
    { text: "punish", translate: "jazolamoq" },
    { text: "represent", translate: "vakillik qilmoq" },
    { text: "shake", translate: "silkitmoq" },
    { text: "spread", translate: "tarqalmoq" },
    { text: "stroll", translate: "sayrga chiqmoq" },
    { text: "village", translate: "qishloq "},
    { text: "against", translate: "qarshi" },
    { text: "beach", translate: "sohil" },
    { text: "damage", translate: "zarar" },
    { text: "discover", translate: "kashf qilmoq" },
    { text: "emotion", translate: "hissiyot" },
    { text: "fix", translate: "tuzatmoq" },
    { text: "frank", translate: "samimiy" },
    { text: "identify", translate: "aniqlash" },
    { text: "island", translate: "orol" },
    { text: "ocean", translate: "okean" },
    { text: "perhaps", translate: "ehtimol" },
    { text: "pleasant", translate: "yoqimli" },
    { text: "prevent", translate: "oldini olmoq" },
    { text: "rock", translate: "tosh" },
    { text: "save", translate: "asramoq" },
    { text: "step", translate: "qadam" },
    { text: "still", translate: "hali ham" },
    { text: "taste", translate: "ta'm, tatib ko'rmoq" },
    { text: "throw", translate: "otmoq" },
    { text: "wave", translate: "to'lqin" },
    { text: "benefit", translate: "foyda" },
    { text: "certain", translate: "aniq" },
    { text: "chance", translate: "imkoniyat" },
    { text: "effect", translate: "ta'sir" },
    { text: "essential", translate: "muhim" },
    { text: "far", translate: "uzoq" },
    { text: "focus", translate: "diqqat markazi" },
    { text: "function", translate: "vazifa" },
    { text: "grass", translate: "o't" },
    { text: "guard", translate: "qo'riqchi" },
    { text: "image", translate: "rasm" },
    { text: "immediate", translate: "darhol" },
    { text: "primary", translate: "asosiy" },
    { text: "proud", translate: "mag'rur" },
    { text: "remain", translate: "qolmoq" },
    { text: "rest", translate: "dam olmoq," },
    { text: "separate", translate: "alohida" },
    { text: "site", translate: "joy" },
    { text: "tail", translate: "dum" },
    { text: "trouble", translate: "muammo" },
    { text: "across", translate: "kesib" },
    { text: "breathe", translate: "nafas olmoq" },
    { text: "characteristic", translate: "xususiyat" },
    { text: "consume", translate: "iste'mol qilmoq" },
    { text: "excite", translate: "hayratlanmoq" },
    { text: "extreme", translate: "haddan tashqari" },
    { text: "fear", translate: "qo'rquv" },
    { text: "fortunate", translate: "baxtli" },
    { text: "happen", translate: "sodir bo'lmoq" },
    { text: "length", translate: "uzunlik" },
    { text: "mistake", translate: "xato" },
    { text: "observe", translate: "kuzatmoq" },
    { text: "opportunity", translate: "imkoniyat" },
    { text: "prize", translate: "sovrin" },
    { text: "race", translate: "irq" },
    { text: "realize", translate: "tushunmoq" },
    { text: "respond", translate: "javob bermoq" },
    { text: "risk", translate: "xavf" },
    { text: "wonder", translate: "hayron bo`lmoq" },
    { text: "yet", translate: "hali" },
    { text: "academy", translate: "akademiya" },
    { text: "ancient", translate: "qadimiy" },
    { text: "board", translate: "taxta" },
    { text: "century", translate: "asr" },
    { text: "clue", translate: "qo`shimcha ma`lumot" },
    { text: "concert", translate: "kontsert" },
    { text: "county", translate: "graflik" },
    { text: "dictionary", translate: "lug'at" },
    { text: "exist", translate: "mavjud" },
    { text: "flat", translate: "tekis" },
    { text: "gentleman", translate: "jentleman" },
    { text: "hidden", translate: "maxfiy" },
    { text: "maybe", translate: "balki" },
    { text: "officer", translate: "ofitser" },
    { text: "original", translate: "original" },
    { text: "pound", translate: "funt qoqmoq" },
    { text: "process", translate: "jarayon" },
    { text: "publish", translate: "nashr etmoq" },
    { text: "theater", translate: "teatr" },
    { text: "wealth", translate: "boylik" },
    { text: "base", translate: "tayanch" },
    { text: "brain", translate: "miya" },
    { text: "career", translate: "martaba" },
    { text: "clerk", translate: "xizmatchi" },
    { text: "effort", translate: "harakat" },
    { text: "enter", translate: "kirmoq" },
    { text: "excellent", translate: "ajoyib" },
    { text: "hero", translate: "qahramon" },
    { text: "hurry", translate: "shoshilmoq" },
    { text: "inform", translate: "axborot bermoq" },
    { text: "later", translate: "keyinchalik" },
    { text: "leave", translate: "tashlab ketmoq" },
    { text: "locate", translate: "topmoq" },
    { text: "nurse", translate: "hamshira" },
    { text: "operation", translate: "operatsiya" },
    { text: "pain", translate: "og'riq" },
    { text: "refuse", translate: "rad qilmoq" },
    { text: "though", translate: "garchi" },
    { text: "various", translate: "turli" },
    { text: "actual", translate: "dolzarb haqiqiy" },
    { text: "amaze", translate: "hayratlantirmoq" },
    { text: "charge", translate: "zaryadlash" },
    { text: "comfort", translate: "farovonlik" },
    { text: "contact", translate: "aloqa qilmoq" },
    { text: "customer", translate: "mijoz" },
    { text: "deliver", translate: "yetkazib bermoq" },
    { text: "earn", translate: "ishlab topmoq" },
    { text: "gate", translate: "darvoza" },
    { text: "include", translate: "qo'shib qo'ymoq" },
    { text: "manage", translate: "boshqarmoq" },
    { text: "mystery", translate: "sinoat" },
    { text: "occur", translate: "uchramoq" },
    { text: "opposite", translate: "aks qarama-qarshi" },
    { text: "plate", translate: "likop" },
    { text: "receive", translate: "qabul qilmoq" },
    { text: "reward", translate: "sovrin" },
    { text: "set", translate: "qo'ymoq o'rnatmoq" },
    { text: "steal", translate: "o'g'irlamoq" },
    { text: "thief", translate: "o'g'ri" },
    { text: "appear", translate: "paydo bo'lmoq" },
    { text: "actually", translate: "aslida" },
    { text: "bite", translate: "luqma, tishlamoq" },
    { text: "coast", translate: "qirg'oq" },
    { text: "deal", translate: "kelishuv" },
    { text: "desert", translate: "cho'l" },
    { text: "earthquake", translate: "zilzila" },
    { text: "effective", translate: "samarali" },
    { text: "examine", translate: "o'rganmoq" },
    { text: "false", translate: "noto'g'ri" },
    { text: "gift", translate: "sovg'a" },
    { text: "hunger", translate: "ochlik" },
    { text: "imagine", translate: "tasavvur qilmoq" },
    { text: "journey", translate: "sayohat" },
    { text: "puzzle", translate: "jumboq" },
    { text: "quite", translate: "biroz ancha" },
    { text: "rather", translate: "maqul ko'rmoq" },
    { text: "specific", translate: "o'ziga xos" },
    { text: "tour", translate: "sayohat" },
    { text: "trip", translate: "safar" },
    { text: "value", translate: "qiymat" },
    { text: "band", translate: "musiqiy guruh" },
    { text: "barely", translate: "zo'rg'a" },
    { text: "boring", translate: "zerikarli" },
    { text: "cancel", translate: "bekor qilmoq" },
    { text: "driveway", translate: "yo'lak" },
    { text: "garbage", translate: "axlat" },
    { text: "instrument", translate: "asbob" },
    { text: "list", translate: "ro'yxat" },
    { text: "magic", translate: "sehrli" },
    { text: "message", translate: "xabar" },
    { text: "notice", translate: "payqamoq" },
    { text: "own", translate: "ega bo'lmoq" },
    { text: "predict", translate: "taxmin qilmoq" },
    { text: "professor", translate: "professor" },
    { text: "rush", translate: "shoshilmoq" },
    { text: "schedule", translate: "jadval" },
    { text: "share", translate: "ulashmoq" },
    { text: "stage", translate: "bosqich" },
    { text: "storm", translate: "bo'ron" },
    { text: "within", translate: "ichida" },
    { text: "advertise", translate: "reklama qilmoq" },
    { text: "assign", translate: "tayinlamoq" },
    { text: "audience", translate: "tomoshabin" },
    { text: "breakfast", translate: "nonushta" },
    { text: "competition", translate: "musobaqa" },
    { text: "cool", translate: "salqin, ajoyib" },
    { text: "gain", translate: "erishmoq, ega bo'lmoq" },
    { text: "importance", translate: "ahamiyat" },
    { text: "knowledge", translate: "bilim" },
    { text: "major", translate: "katta" },
    { text: "mean", translate: "anglatmoq" },
    { text: "prefer", translate: "afzal ko'rmoq" },
    { text: "president", translate: "prezident" },
    { text: "progress", translate: "taraqqiyot" },
    { text: "respect", translate: "hurmat" },
    { text: "rich", translate: "boy" },
    { text: "skill", translate: "qobiliyat" },
    { text: "somehow", translate: "qandaydir yo'l bilan" },
    { text: "strength", translate: "kucht -quvvat" },
    { text: "vote", translate: "ovoz bermoq" },
    { text: "above", translate: "yuqorida" },
    { text: "ahead", translate: "oldinga" },
    { text: "amount", translate: "miqdor" },
    { text: "belief", translate: "e'tiqod" },
    { text: "center", translate: "markaz" },
    { text: "common", translate: "umumiy" },
    { text: "cost", translate: "xarajat" },
    { text: "demonstrate", translate: "namoyish qilmoq" },
    { text: "different", translate: "turli" },
    { text: "evidence", translate: "dalillar" },
    { text: "honesty", translate: "halollik" },
    { text: "idiom", translate: "ibora" },
    { text: "independent", translate: "mustaqil" },
    { text: "inside", translate: "ichida" },
    { text: "master", translate: "usta" },
    { text: "memory", translate: "xotira" },
    { text: "proper", translate: "to'g'ri" },
    { text: "scan", translate: "ko'rmoq" },
    { text: "section", translate: "bo'lim" },
    { text: "surface", translate: "sirt" },
]