// ===== ДАННЫЕ О ГЕЙМПАДАХ =====
const GAMEPADS = [
  {
    id:"flydigi-vader-4-pro", name:"Flydigi Vader 4 Pro", price:6500, purchaseDate:"сентябре 2026", usageMonths:2,
    genres:["shooter","racing","fighting","arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:6.4, wirelessLatencyMs:7.6, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Геймпад с опросом 1000 Гц, стиками Холла с регулировкой натяжения 40–100 gf и триггерами 2-в-1 (линейные Холла или микропереключатели). Есть 4 задние кнопки плюс C/Z, гироскоп и аккумулятор на 800 мАч.",
    verdict:"Самый универсальный Flydigi за свои деньги: Холл, гироскоп и переключаемые триггеры. Стики отстают от кнопок по задержке.",
    image:"images/flydigi-vader-4-pro.png", fullReview:"reviews.html#flydigi-vader-4-pro",
    specLine:"HALL · 1000 Гц",
    specs: {
      sticks: "Холла, натяжение регулируется 40–100 gf",
      triggers: "2-в-1: линейные Холла или микропереключатели",
      connection: "Кабель 6.4 мс, донгл 2.4 ГГц 7.6 мс (кнопки), опрос 1000 Гц",
      battery: "Аккумулятор 800 мАч",
      weight: "—"
    },
    pros: ["Стики Холла: дрейфа не жду, натяжение подстраивается", "Триггеры 2-в-1: гонки и шутеры на одном геймпаде", "4 задние кнопки + C/Z", "Гироскоп", "1000 Гц по кабелю и донглу"],
    cons: ["Стики заметно медленнее кнопок: 16.2 мс по кабелю, 19.2 мс по донглу", "Не имеет лицензии Xbox, на консолях не заведётся", "Аккумулятор всего 800 мАч", "Фирменный софт нужен для тонкой настройки"],
    fullVerdict:"Универсальный геймпад с Холлом, гироскопом и переключаемыми триггерами по цене ниже 7 000 ₽.",
    myReview:"Vader 4 Pro — геймпад, который я ставлю на ПК, когда не хочу заморачиваться выбором. Стики Холла с регулировкой натяжения хорошо ложатся в руку: в шутерах беру потуже, в гонках ослабляю. Триггеры 2-в-1 — реально полезная штука: линейные Холла для Forza, микропереключатели для стрельбы. Из минусов — замеры Gamepadla показывают, что стики отстают от кнопок (16.2 мс по кабелю), и аккумулятор на 800 мАч не рекордный. Для своих денег — отличный выбор.",
    gamepadla: { pollingRate:1000, cableBtn:6.4, cableStick:16.2, dongleBtn:7.6, dongleStick:19.2, btBtn:null, btStick:null, url:"https://gamepadla.com/flydigi-vader-4-pro.html" },
    prices: {
      ozon: { price:6500, url:"https://www.ozon.ru/search/?text=Flydigi%20Vader%204%20Pro" },
      wb: { price:6300, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Flydigi%20Vader%204%20Pro" },
      aliexpress: { price:5400, url:"https://aliexpress.ru/wholesale?SearchText=Flydigi%20Vader%204%20Pro" }
    }
  },
  {
    id:"flydigi-vader-5s", name:"Flydigi Vader 5S", price:7900, purchaseDate:"октябре 2026", usageMonths:1,
    genres:["shooter","racing","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:true,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:3.5, wirelessLatencyMs:4.5, pollingRateHz:1000, sourceLabel:"Gamepadla (ориентир, серия 5S / 5S Pro)",
    description:"Серия Vader 5S для Xbox и ПК с официальной лицензией Xbox. Стики FORCEFLEX (Холл / TMR) с кольцами натяжения 40–100 gf, триггеры FORCESWITCH (клик 0.7 мм или аналог 9 мм), 6 доп. кнопок и 4 мотора вибрации.",
    verdict:"Лицензия Xbox и быстрые стики в одном корпусе. Брать, если нужен Xbox-совместимый геймпад с Холлом/TMR.",
    image:"images/flydigi-vader-5s.png", fullReview:"reviews.html#flydigi-vader-5s",
    specLine:"XBOX LICENSED · HALL/TMR",
    specs: {
      sticks: "FORCEFLEX (Холл / TMR), кольца натяжения 40–100 gf",
      triggers: "FORCESWITCH: клик 0.7 мм или аналог 9 мм",
      connection: "Провод ~3.5 мс, донгл ~4.5 мс (у 5S Pro), до 1000 Гц на ПК",
      battery: "Встроенный аккумулятор",
      weight: "—"
    },
    pros: ["Официальная лицензия Xbox", "Стики Холл/TMR с кольцами натяжения", "Триггеры с переключением клик/аналог", "6 доп. кнопок: M1/M2, LM/RM, C/Z", "4 мотора вибрации", "Низкая задержка стиков (~5–7 мс)"],
    cons: ["Цифры задержки у 5S и 5S Pro отличаются: смотрите свою модель", "Нет гироскопа", "Дороже Vader 4 Pro", "Донгл по замерам только у 5S Pro"],
    fullVerdict:"Лицензированный Xbox-геймпад с Холлом/TMR и переключаемыми триггерами.",
    myReview:"Vader 5S — тот случай, когда лицензия Xbox не делает геймпад скучным. Кольца натяжения на стиках и переключаемые триггеры FORCESWITCH дают гибкость, которой нет у обычного Xbox-контроллера, а задержка стиков в районе 5–7 мс на фоне Vader 4 Pro выглядит прыжком вперёд. Честно: гироскопа нет, и это единственное, что меня остановило бы, если он нужен. Для Xbox и ПК без костылей — один из лучших вариантов.",
    gamepadla: { pollingRate:1000, cableBtn:3.5, cableStick:6.0, dongleBtn:4.5, dongleStick:6.0, btBtn:null, btStick:null, url:"https://gamepadla.com/" },
    prices: {
      ozon: { price:7900, url:"https://www.ozon.ru/search/?text=Flydigi%20Vader%205S" },
      wb: { price:7700, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Flydigi%20Vader%205S" },
      aliexpress: { price:6800, url:"https://aliexpress.ru/wholesale?SearchText=Flydigi%20Vader%205S" }
    }
  },
  {
    id:"flydigi-apex-4", name:"Flydigi Apex 4", price:10900, purchaseDate:"августе 2026", usageMonths:3,
    genres:["racing","shooter","arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:7.0, wirelessLatencyMs:7.7, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Флагман с адаптивными силовыми триггерами (Force Feedback), цветным экраном, стиками Холла с натяжением 30–100 gf, 4 задними кнопками и гироскопом. Аккумулятор 1500 мАч, опрос 1000 Гц.",
    verdict:"Много функций и Force Feedback в триггерах, но стики по задержке на 40–50 мс — это заметный минус для шутеров.",
    image:"images/flydigi-apex-4.png", fullReview:"reviews.html#flydigi-apex-4",
    specLine:"FORCE FEEDBACK · HALL",
    specs: {
      sticks: "Холла, натяжение 30–100 gf",
      triggers: "Адаптивные силовые (Force Feedback)",
      connection: "Кабель 7.0 мс, донгл 7.7 мс, BT 22.4 мс (кнопки), опрос 1000 Гц",
      battery: "Аккумулятор 1500 мАч",
      weight: "—"
    },
    pros: ["Силовые триггеры Force Feedback", "Цветной экран для настроек", "Стики Холла с регулировкой натяжения", "4 задние кнопки, гироскоп", "Ёмкий аккумулятор 1500 мАч"],
    cons: ["Задержка стиков 42.8 мс по кабелю и 50.7 мс по донглу", "Bluetooth: 73.5 мс на стиках", "Дорогой", "Нет лицензии Xbox"],
    fullVerdict:"Богатый на функции геймпад, но задержка стиков портит впечатление в динамичных играх.",
    myReview:"Apex 4 впечатляет с первого включения: экран, силовые триггеры, куча настроек. В гонках Force Feedback в триггерах реально добавляет ощущений. Но я смотрел замеры Gamepadla и ощущения подтверждаются: стики отстают сильно — 42.8 мс по кабелю и 50.7 мс по донглу, а по Bluetooth вообще 73.5 мс. Для кинематографичных игр нормально, для соревновательных шутеров я бы взял Apex 5 или G7 Pro.",
    gamepadla: { pollingRate:1000, cableBtn:7.0, cableStick:42.8, dongleBtn:7.7, dongleStick:50.7, btBtn:22.4, btStick:73.5, url:"https://gamepadla.com/flydigi-apex-4.html" },
    prices: {
      ozon: { price:10900, url:"https://www.ozon.ru/search/?text=Flydigi%20Apex%204" },
      wb: { price:10500, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Flydigi%20Apex%204" },
      aliexpress: { price:9200, url:"https://aliexpress.ru/wholesale?SearchText=Flydigi%20Apex%204" }
    }
  },
  {
    id:"apex-5", name:"Flydigi Apex 5", price:13500, purchaseDate:"июле 2026", usageMonths:4,
    genres:["shooter","racing","arcade"], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:3.0, wirelessLatencyMs:4.9, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"NearLink 2.4 ГГц или кабель на 1000 Гц, стики Hall Effect 2.0 (30–100 gf), силовые триггеры Force Feedback и экран 150 FPS. Две фиксированные и две съёмные задние лепестка плюс 2 доп. бампера, аккумулятор 1500 мАч.",
    verdict:"Лучшие стики во всей линейке Flydigi по замерам: 2.8 мс по кабелю. Дорого, но по задержке почти идеален.",
    image:"images/flydigi-apex-5.webp", fullReview:"apex5.html",
    specLine:"NEARLINK · HALL 2.0",
    specs: {
      sticks: "Hall Effect 2.0, натяжение 30–100 gf",
      triggers: "Силовые Force Feedback",
      connection: "Кабель 3.0 мс, донгл 4.9 мс, BT 22.3 мс (кнопки), опрос 1000 Гц",
      battery: "Аккумулятор 1500 мАч",
      weight: "—"
    },
    pros: ["Стики: 2.8 мс по кабелю, 5.5 мс по донглу", "Силовые триггеры Force Feedback", "Экран 150 FPS", "Лепестки: 2 фиксированных + 2 съёмных + 2 бампера", "Ёмкий аккумулятор"],
    cons: ["Высокая цена", "Bluetooth заметно медленнее донгла (22.3 мс)", "Не имеет лицензии Xbox", "Фирменный софт обязателен для настройки"],
    fullVerdict:"Флагман Flydigi с лучшей задержкой стиков и Force Feedback в триггерах.",
    myReview:"Apex 5 — мой выбор, когда нужна максимальная отзывчивость. Стики по Gamepadla дают 2.8 мс по кабелю и 5.5 мс по донглу, и это чувствуется в шутерах: прицел идёт за рукой без ощущения «резины». Force Feedback в триггерах приятен в гонках, экран — приятная мелочь. Минусы: цена, и по Bluetooth лучше не играть в динамичное (22 мс). Если бюджет позволяет — это лучший Flydigi.",
    gamepadla: { pollingRate:1000, cableBtn:3.0, cableStick:2.8, dongleBtn:4.9, dongleStick:5.5, btBtn:22.3, btStick:23.0, url:"https://gamepadla.com/flydigi-apex-5.html" },
    prices: {
      ozon: { price:13500, url:"https://www.ozon.ru/search/?text=Flydigi%20Apex%205" },
      wb: { price:13200, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Flydigi%20Apex%205" },
      aliexpress: { price:11500, url:"https://aliexpress.ru/wholesale?SearchText=Flydigi%20Apex%205" }
    }
  },
  {
    id:"flydigi-apex-6", name:"Flydigi Apex 6", price:15900, purchaseDate:"ноябре 2026", usageMonths:1,
    genres:["shooter","racing","fighting","arcade"], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:3.0, wirelessLatencyMs:4.3, pollingRateHz:1000, sourceLabel:"Оценка по паспорту Flysync",
    description:"Самый новый флагман Flydigi: 1000 Гц Flysync, стики Alloy Joystick 3.0 на датчиках TMR (30–100 gf), триггеры VCM Force-Switching в 3 режимах, система X-Haptics, 6 доп. кнопок, экран 150 FPS и аккумулятор 1500 мАч.",
    verdict:"Самый технологичный в линейке, но замеры пока оценочные. Берите, если нужен максимум и вас не пугает цена.",
    image:"images/flydigi-apex-6.jpg", fullReview:"reviews.html#flydigi-apex-6",
    specLine:"TMR · FLYSYNC",
    specs: {
      sticks: "Alloy Joystick 3.0 на TMR, натяжение 30–100 gf",
      triggers: "VCM Force-Switching: клик 0.7 мм, адаптивный 9 мм, гибрид",
      connection: "Кабель ~3.0 мс, донгл ~4.3 мс (оценка по паспорту), 1000 Гц Flysync",
      battery: "Аккумулятор 1500 мАч",
      weight: "—"
    },
    pros: ["TMR-стики с регулировкой натяжения", "3 режима триггеров VCM Force-Switching", "X-Haptics: VCM + роторы", "6 доп. кнопок", "Экран 150 FPS"],
    cons: ["Самая высокая цена в каталоге", "Задержки взяты по паспорту, независимого замера Gamepadla у меня нет", "Нет лицензии Xbox", "Сложно настраивать: много режимов"],
    fullVerdict:"Новейший Flydigi с TMR и тройным режимом триггеров, но замеры пока оценочные.",
    myReview:"Apex 6 я пока считаю самым интересным и самым дорогим Flydigi. TMR-стики и три режима триггеров дают много свободы, а X-Haptics отдаёт заметно богаче, чем простая вибрация. Но будем честны: цифры 3.0 и 4.3 мс — по паспорту Flysync, независимого замера на Gamepadla я не видел, поэтому в таблице это оценка. Берите, если цена вас не пугает; иначе Apex 5 даёт почти то же за меньшие деньги.",
    gamepadla: { pollingRate:1000, cableBtn:3.0, cableStick:null, dongleBtn:4.3, dongleStick:null, btBtn:null, btStick:null, url:"https://gamepadla.com/" },
    prices: {
      ozon: { price:15900, url:"https://www.ozon.ru/search/?text=Flydigi%20Apex%206" },
      wb: { price:15500, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Flydigi%20Apex%206" },
      aliexpress: { price:13800, url:"https://aliexpress.ru/wholesale?SearchText=Flydigi%20Apex%206" }
    }
  },
  {
    id:"xbox-elite-2", name:"Xbox Elite Wireless Controller Series 2", price:16900, purchaseDate:"марте 2026", usageMonths:8,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:7.9, wirelessLatencyMs:6.6, pollingRateHz:125, sourceLabel:"Gamepadla",
    description:"Премиальный геймпад Microsoft: потенциометры ALPS с регулировкой натяжения ключом, 3-позиционные ограничители триггеров, сменные стики и крестовина, 4 съёмных лепестка. До 40 часов автономности.",
    verdict:"Самый добротный и комфортный в руке. Потенциометры в такой цене — компромисс, но железо и эргономика на высоте.",
    image:"images/xbox-elite-2.jpg", fullReview:"reviews.html#xbox-elite-2",
    specLine:"XBOX · ALPS · PRO",
    specs: {
      sticks: "Потенциометры ALPS, натяжение регулируется ключом, сменные",
      triggers: "3-позиционные ограничители хода",
      connection: "Кабель 7.9 мс, Xbox Wireless донгл 6.6 мс, BT 10.9 мс (кнопки)",
      battery: "До 40 часов от аккумулятора",
      weight: "—"
    },
    pros: ["Отличная сборка и эргономика", "Сменные стики, крестовина и 4 лепестка", "3-позиционные ограничители триггеров", "До 40 часов автономности", "Лицензия Xbox/PC, работает везде"],
    cons: ["Очень дорогой", "Потенциометры ALPS: дрейф со временем возможен", "Опрос 125 Гц", "Стики по кабелю 13.2 мс"],
    fullVerdict:"Эталонный по сборке и эргономике геймпад, но потенциометры за такую цену — спорно.",
    myReview:"Elite Series 2 держишь в руке и сразу понимаешь, за что просят деньги: прорезиненные лепестки, сменные стики, ограничители триггеров. Для длинных сессий в Forza и шутерах это самый удобный геймпад в коллекции. Минусы очевидны: стики на потенциометрах ALPS, опрос 125 Гц и цена, за которую берут Flydigi Apex 5. Если важна эргономика и лицензия — берите; если гонитесь за задержкой, смотрите Flydigi и G7 Pro.",
    gamepadla: { pollingRate:125, cableBtn:7.9, cableStick:13.2, dongleBtn:6.6, dongleStick:null, btBtn:10.9, btStick:null, url:"https://gamepadla.com/xbox-elite-series-2-controller.html" },
    prices: {
      ozon: { price:16900, url:"https://www.ozon.ru/search/?text=Xbox%20Elite%20Wireless%20Controller%20Series%202" },
      wb: { price:16500, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Xbox%20Elite%20Wireless%20Controller%20Series%202" },
      aliexpress: { price:14500, url:"https://aliexpress.ru/wholesale?SearchText=Xbox%20Elite%20Wireless%20Controller%20Series%202" }
    }
  },
  {
    id:"zd-ultimate-legend", name:"ZD Ultimate Legend", price:11500, purchaseDate:"сентябре 2026", usageMonths:2,
    genres:["shooter","fighting","arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:1.0, wirelessLatencyMs:9.0, pollingRateHz:3000, sourceLabel:"Паспорт ZD (замер Gamepadla ожидается)",
    description:"Сверхвысокий опрос до 3000–8000 Гц по проводу и 900 Гц по 2.4 ГГц, модульные стики (Холл / TMR), переключаемые триггеры (линейные Холла / микропереключатели), 6 доп. кнопок, 6 вибромоторов и гироскоп. Аккумулятор 1500 мАч.",
    verdict:"Рекордные цифры задержки по проводу. По донглу ~9 мс — не рекорд, но тоже хорошо.",
    image:"images/zd-ultimate-legend.png", fullReview:"reviews.html#zd-ultimate-legend",
    specLine:"3000+ Гц · HALL/TMR",
    specs: {
      sticks: "Модульные, Холл или TMR",
      triggers: "Переключаемые: линейные Холла / микропереключатели",
      connection: "Кабель <1 мс (кнопки) / ~2 мс (стики), донгл <9 мс, опрос до 3000–8000 Гц по кабелю",
      battery: "Аккумулятор 1500 мАч",
      weight: "—"
    },
    pros: ["Опрос до 3000–8000 Гц по проводу", "Задержка по кабелю меньше 1 мс", "Модульные стики Холл/TMR", "6 вибромоторов, гироскоп", "6 доп. кнопок"],
    cons: ["Значения приведены по паспорту, не по моему замеру", "По донглу опрос только 900 Гц", "Нет лицензии Xbox", "Меньше документации и софта, чем у Flydigi"],
    fullVerdict:"Геймпад для тех, кто гонится за минимальной задержкой по проводу, но цифры пока по паспорту.",
    myReview:"ZD Ultimate Legend — это геймпад про цифры. Опрос в несколько тысяч герц по проводу и задержка меньше миллисекунды звучат как маркетинг, и я бы хотел увидеть независимый замер на Gamepadla — пока опираюсь на паспорт. В руках он приятный, модульные стики — удобно. Работает отлично, но заметной разницы с Apex 5 в играх я не ощутил: человеческая реакция не измеряется в тысячных долях секунды. Берите ради характеристик и модульности.",
    gamepadla: { pollingRate:3000, cableBtn:1.0, cableStick:2.0, dongleBtn:9.0, dongleStick:null, btBtn:null, btStick:null, url:"https://gamepadla.com/" },
    prices: {
      ozon: { price:11500, url:"https://www.ozon.ru/search/?text=ZD%20Ultimate%20Legend" },
      wb: { price:11200, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=ZD%20Ultimate%20Legend" },
      aliexpress: { price:9500, url:"https://aliexpress.ru/wholesale?SearchText=ZD%20Ultimate%20Legend" }
    }
  },
  {
    id:"gamesir-g7-pro", name:"GameSir G7 Pro", price:8500, purchaseDate:"апреле 2026", usageMonths:7,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:true, hasHallEffect:true,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:2.4, wirelessLatencyMs:5.7, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Опрос 1000 Гц на ПК по кабелю и донглу 2.4 ГГц, лицензия Xbox (по проводу), стики Mag-Res TMR, триггеры Холла с механическими стопорами, оптические ABXY, гироскоп на ПК. В комплекте док-станция и аккумулятор 1200 мАч.",
    verdict:"Лучший баланс цены, задержки и функций в моей коллекции. Док в комплекте — приятный бонус.",
    image:"images/gamesir-g7-pro.jpg", fullReview:"reviews.html#gamesir-g7-pro",
    specLine:"TMR · XBOX LICENSED",
    specs: {
      sticks: "Mag-Res TMR",
      triggers: "Холла с механическими стопорами",
      connection: "Кабель 2.4 мс, донгл 5.7 мс, BT 5.4 мс (кнопки), опрос 1000 Гц",
      battery: "Аккумулятор 1200 мАч, док-станция в комплекте",
      weight: "—"
    },
    pros: ["Задержка стиков: 2.7 мс по кабелю", "TMR-стики и триггеры Холла", "Оптические ABXY", "Лицензия Xbox по проводу, гироскоп на ПК", "Док-станция в комплекте"],
    cons: ["Нет регулировки натяжения стиков как у Flydigi", "Дорогой по сравнению с обычным Xbox", "Лицензия Xbox только по проводу", "Фирменный софт GameSir обязателен для настроек"],
    fullVerdict:"Лучший баланс цены, задержки и функций: TMR, Холл, оптика и док в комплекте.",
    myReview:"G7 Pro — геймпад, который я чаще всего оставляю подключённым к ПК. Задержка в Gamepadla отличная: 2.4 мс по кабелю, 5.7 мс по донглу, и по Bluetooth тоже всего 5.4 мс. TMR-стики не дрейфуют, триггеры Холла с механическими стопорами удобны в гонках и шутерах. Док в комплекте — это мелочь, но сильно упрощает жизнь. Из минусов — софт приходится ставить, а Xbox-лицензия действует по проводу.",
    gamepadla: { pollingRate:1000, cableBtn:2.4, cableStick:2.7, dongleBtn:5.7, dongleStick:5.8, btBtn:5.4, btStick:null, url:"https://gamepadla.com/gamesir-g7-pro.html" },
    prices: {
      ozon: { price:8500, url:"https://www.ozon.ru/search/?text=GameSir%20G7%20Pro" },
      wb: { price:8300, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=GameSir%20G7%20Pro" },
      aliexpress: { price:7200, url:"https://aliexpress.ru/wholesale?SearchText=GameSir%20G7%20Pro" }
    }
  },
  {
    id:"dualsense", name:"Sony PlayStation 5 DualSense", price:7200, purchaseDate:"феврале 2026", usageMonths:9,
    genres:["arcade","racing"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:false,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:7.8, wirelessLatencyMs:9.0, pollingRateHz:250, sourceLabel:"Gamepadla",
    description:"Адаптивные триггеры и тактильная отдача Haptic Feedback, 6-осевой гироскоп, тачпад и потенциометры ALPS. Опрос 250 Гц, после разгона на ПК — до 1000 Гц. Аккумулятор 1560 мАч.",
    verdict:"Лучшие тактильные ощущения в классе, но на ПК без Steam Input раскрывается не полностью.",
    image:"images/dualsense.jpg", fullReview:"reviews.html#dualsense",
    specLine:"HAPTICS · ADAPTIVE",
    specs: {
      sticks: "Потенциометры ALPS",
      triggers: "Адаптивные триггеры + Haptic Feedback",
      connection: "Кабель 7.8 мс, BT 9.0 мс (кнопки), опрос 250 Гц (до 1000 Гц после разгона на ПК)",
      battery: "Аккумулятор 1560 мАч",
      weight: "—"
    },
    pros: ["Лучшая тактильная отдача", "Адаптивные триггеры", "6-осевой гироскоп и тачпад", "Ёмкий аккумулятор 1560 мАч", "Bluetooth быстрый: 9.0 мс"],
    cons: ["На ПК много функций работает только через Steam Input", "Потенциометры ALPS: дрейф со временем", "Нет донгла 2.4 ГГц, только BT и провод", "Нет лицензии Xbox"],
    fullVerdict:"Отличная отдача и гироскоп, но на ПК многое завязано на Steam Input.",
    myReview:"DualSense — геймпад, который хочется держать в руках из-за отдачи: Haptic Feedback и адаптивные триггеры ощущаются иначе, чем у любого Xbox. По Bluetooth задержка всего 9.0 мс — это хорошо. На ПК приходится возиться со Steam Input и DS4Windows-подобными вещами, чтобы получить всё. Дрейф ALPS — вопрос времени, об этом стоит помнить при покупке.",
    gamepadla: { pollingRate:250, cableBtn:7.8, cableStick:12.6, dongleBtn:null, dongleStick:null, btBtn:9.0, btStick:13.6, url:"https://gamepadla.com/sony-dualsense.html" },
    prices: {
      ozon: { price:7200, url:"https://www.ozon.ru/search/?text=Sony%20PlayStation%205%20DualSense" },
      wb: { price:7000, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Sony%20PlayStation%205%20DualSense" },
      aliexpress: { price:6400, url:"https://aliexpress.ru/wholesale?SearchText=Sony%20PlayStation%205%20DualSense" }
    }
  },
  {
    id:"xbox-one-1708", name:"Microsoft Xbox One Wireless Controller (Rev. 1708)", price:4800, purchaseDate:"январе 2026", usageMonths:10,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:8.5, wirelessLatencyMs:7.5, pollingRateHz:125, sourceLabel:"Gamepadla (ориентир)",
    description:"Классический Xbox One геймпад: опрос 125 Гц, потенциометры ALPS, импульсные виброкурки. Подключение по Micro-USB, Bluetooth или Xbox Wireless донглу, питание от 2×AA.",
    verdict:"Старый добрый Xbox: дёшево и надёжно. Micro-USB и 125 Гц — цена возраста.",
    image:"images/xbox-one-1708.jpg", fullReview:"reviews.html#xbox-one-1708",
    specLine:"XBOX ONE · 125 Гц",
    specs: {
      sticks: "Потенциометры ALPS",
      triggers: "Импульсные виброкурки",
      connection: "Кабель ~8.5 мс, Xbox Wireless ~7.5 мс, BT ~13.5 мс (кнопки), 125 Гц",
      battery: "2×AA",
      weight: "—"
    },
    pros: ["Самая низкая цена в коллекции", "Работает везде без драйверов", "Импульсные виброкурки", "Xbox Wireless и Bluetooth", "Элементы питания AA легко менять"],
    cons: ["Micro-USB вместо USB-C", "Опрос 125 Гц", "Стики по кабелю ~14 мс", "Потенциометры ALPS"],
    fullVerdict:"Дешёвый и проверенный геймпад. Устаревший разъём и 125 Гц — цена возраста.",
    myReview:"Xbox One Rev. 1708 — мой «геймпад на всякий случай». Он стоит копейки, подключается по Bluetooth или Xbox Wireless и работает везде. Micro-USB давно устарел, а опрос 125 Гц и задержка стиков около 14 мс для соревновательных шутеров маловаты. Зато для гонок, платформеров и игр с друзьями — всё в порядке, а батарейки AA меняются за секунду.",
    gamepadla: { pollingRate:125, cableBtn:8.5, cableStick:14.0, dongleBtn:7.5, dongleStick:null, btBtn:13.5, btStick:null, url:"https://gamepadla.com/" },
    prices: {
      ozon: { price:4800, url:"https://www.ozon.ru/search/?text=Xbox%20One%20Wireless%20Controller%201708" },
      wb: { price:4600, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Xbox%20One%20Wireless%20Controller%201708" },
      aliexpress: { price:4200, url:"https://aliexpress.ru/wholesale?SearchText=Xbox%20One%20Wireless%20Controller%201708" }
    }
  },
  {
    id:"xbox-series-xs", name:"Microsoft Xbox Wireless Controller (Series X|S)", price:5800, purchaseDate:"январе 2026", usageMonths:10,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:8.0, wirelessLatencyMs:6.8, pollingRateHz:125, sourceLabel:"Gamepadla",
    description:"Актуальный геймпад Microsoft: гибридная крестовина, кнопка Share, импульсные триггеры, USB-C, Bluetooth LE и Xbox Wireless. Опрос 125 Гц, потенциометры ALPS, питание от 2×AA.",
    verdict:"Эталон совместимости: берёшь и играешь на ПК, Xbox, Android. Без изысков.",
    image:"images/xbox-series-xs.jpg", fullReview:"reviews.html#xbox-series-xs",
    specLine:"XBOX · USB-C",
    specs: {
      sticks: "Потенциометры ALPS",
      triggers: "Импульсные триггеры, гибридная крестовина",
      connection: "Кабель ~8.0 мс, Xbox Wireless ~6.8 мс, BT ~11.5 мс (кнопки), 125 Гц",
      battery: "2×AA",
      weight: "—"
    },
    pros: ["USB-C, Bluetooth LE и Xbox Wireless", "Лицензия Xbox/PC, работает везде", "Кнопка Share", "Импульсные триггеры", "Низкая цена"],
    cons: ["Опрос 125 Гц", "Потенциометры ALPS", "Стики по кабелю ~12.8 мс", "Нет гироскопа и задних кнопок"],
    fullVerdict:"Универсальный и недорогой геймпад. Без изысков, зато без проблем с совместимостью.",
    myReview:"Xbox Series X|S — геймпад, который работает без вопросов. USB-C, Bluetooth LE, Xbox Wireless — выбирай любой способ, Windows подхватит сразу. Крестовина лучше, чем у старого Xbox One, а Share — приятная мелочь. Но 125 Гц и ALPS — это потолок: тем, кому важна минимальная задержка, лучше смотреть в сторону G7 Pro. Для обычного гейминга и совместимости — безопасный выбор.",
    gamepadla: { pollingRate:125, cableBtn:8.0, cableStick:12.8, dongleBtn:6.8, dongleStick:null, btBtn:11.5, btStick:null, url:"https://gamepadla.com/xbox-series-x-s-controller.html" },
    prices: {
      ozon: { price:5800, url:"https://www.ozon.ru/search/?text=Xbox%20Wireless%20Controller%20Series%20X%7CS" },
      wb: { price:5600, url:"https://www.wildberries.ru/catalog/0/search.aspx?search=Xbox%20Wireless%20Controller%20Series%20X%7CS" },
      aliexpress: { price:5100, url:"https://aliexpress.ru/wholesale?SearchText=Xbox%20Wireless%20Controller%20Series%20X%7CS" }
    }
  }
];

// ===== ЗАДЕРЖКИ (стиль Gamepadla) =====
// Источник правды для замеров — gamepadla-data.json (обновляется scripts/sync-gamepadla.js).
// Значения в GAMEPADS — фолбэк, если файл недоступен (например, страница открыта через file://).
var LATENCY_STATE = { source: 'data.js', updated: null, loaded: false };
var latencyListeners = [];

function numOrNull(v) { return typeof v === 'number' ? v : null; }

// Накладывает замеры из JSON на GAMEPADS; возвращает число обновлённых моделей
function applyLatencyData(json) {
  var n = 0;
  if (!json || !json.models) return n;
  GAMEPADS.forEach(function(g) {
    var m = json.models[g.id];
    if (!m) return;
    var l = g.gamepadla = g.gamepadla || {};
    ['pollingRate', 'cableBtn', 'cableStick', 'dongleBtn', 'dongleStick', 'btBtn', 'btStick'].forEach(function(k) {
      if (m[k] !== undefined) l[k] = numOrNull(m[k]);
    });
    if (m.url) l.url = m.url;
    l.verified = m.verified === true;
    if (typeof l.cableBtn === 'number') g.wiredLatencyMs = l.cableBtn;
    var wl = typeof l.dongleBtn === 'number' ? l.dongleBtn : l.btBtn;
    g.wirelessLatencyMs = typeof wl === 'number' ? wl : null;
    if (typeof l.pollingRate === 'number') g.pollingRateHz = l.pollingRate;
    g.sourceLabel = l.verified ? 'Gamepadla' : 'Gamepadla (оценка)';
    n++;
  });
  return n;
}

// Загрузка gamepadla-data.json (XHR, чтобы работать на ES5). cb(ok, errorText)
function loadLatencyData(cb, bust) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'gamepadla-data.json' + (bust ? '?t=' + Date.now() : ''), true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    var ok = false, err = '';
    if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
      try {
        var json = JSON.parse(xhr.responseText);
        if (applyLatencyData(json)) {
          LATENCY_STATE.source = 'json';
          LATENCY_STATE.updated = json.updated || null;
          LATENCY_STATE.loaded = true;
          ok = true;
        } else err = 'в файле нет нужных моделей';
      } catch (e) { err = 'файл повреждён'; }
    } else err = 'файл недоступен (HTTP ' + xhr.status + ')';
    cb(ok, err);
  };
  try { xhr.send(); } catch (e) { cb(false, 'открыто без сервера'); }
}

function fmtUpdated(iso) {
  if (!iso) return '—';
  var d = new Date(iso);
  if (isNaN(d.getTime())) return '—';
  function p(n) { return n < 10 ? '0' + n : '' + n; }
  return p(d.getDate()) + '.' + p(d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
}

function hasLatency(g) { return typeof g.wiredLatencyMs === 'number'; }

function bestLatency(g) {
  var v = [g.wiredLatencyMs, g.wirelessLatencyMs].filter(function(x) { return typeof x === 'number'; });
  return v.length ? Math.min.apply(null, v) : Infinity;
}

function latencyLine(g) {
  if (!hasLatency(g)) return '';
  var s = 'Задержка: ' + g.wiredLatencyMs.toFixed(1) + ' мс';
  if (typeof g.wirelessLatencyMs === 'number') s += ' (BT/2.4G ' + g.wirelessLatencyMs.toFixed(1) + ' мс)';
  return s + ' · ' + g.pollingRateHz + ' Гц (' + g.sourceLabel + ')';
}

function renderLatencyTable() {
  var box = document.getElementById('latency-table');
  if (!box) return;
  var rows = GAMEPADS.filter(function(g) { return g.price > 0 && hasLatency(g); });
  var key = 'wired', dir = 1;
  var val = { name: function(r) { return r.name; }, wired: function(r) { return r.wiredLatencyMs; },
    wireless: function(r) { return r.wirelessLatencyMs == null ? Infinity : r.wirelessLatencyMs; },
    poll: function(r) { return -r.pollingRateHz; } };
  function draw() {
    var f = val[key];
    var list = rows.slice().sort(function(a, b) {
      var x = f(a), y = f(b);
      return (x < y ? -1 : x > y ? 1 : 0) * dir;
    });
    var th = function(k, t) { return '<th data-k="' + k + '">' + t + (key === k ? (dir > 0 ? ' ▲' : ' ▼') : '') + '</th>'; };
    box.innerHTML = '<table class="lat-table"><thead><tr>' + th('name', 'Модель') + th('wired', 'Провод, мс') + th('wireless', 'Беспровод, мс') + th('poll', 'Опрос, Гц') + '<th>Источник</th></tr></thead><tbody>' +
      list.map(function(r) {
        return '<tr><td>' + r.name + '</td><td class="mono">' + r.wiredLatencyMs.toFixed(1) + '</td><td class="mono">' +
          (r.wirelessLatencyMs == null ? '—' : r.wirelessLatencyMs.toFixed(1)) + '</td><td class="mono">' + r.pollingRateHz + '</td><td>' + r.sourceLabel + '</td></tr>';
      }).join('') + '</tbody></table>';
  }
  box.addEventListener('click', function(e) {
    var h = e.target.closest ? e.target.closest('th[data-k]') : null;
    if (!h) return;
    var k = h.getAttribute('data-k');
    dir = (k === key) ? -dir : 1; key = k; draw();
  });
  draw();
  latencyListeners.push(draw);
  renderLatencyFooter(box);
}

// Подвал таблицы: кнопка ручной проверки + дата обновления gamepadla-data.json
function renderLatencyFooter(box) {
  var foot = document.getElementById('latency-foot');
  if (!foot) {
    foot = document.createElement('div');
    foot.id = 'latency-foot';
    foot.className = 'lat-foot';
    box.parentNode.insertBefore(foot, box.nextSibling);
  }
  foot.innerHTML = '<button type="button" class="lat-refresh" id="latency-refresh">Проверить обновление</button>' +
    '<span class="lat-stamp" id="latency-stamp"></span>' +
    '<span class="lat-note">Клик по заголовку — сортировка · Автосинхронизация с Gamepadla раз в сутки.</span>';
  var btn = document.getElementById('latency-refresh');
  btn.addEventListener('click', function() {
    btn.disabled = true;
    btn.textContent = 'Проверяю…';
    loadLatencyData(function(ok, err) {
      btn.disabled = false;
      btn.textContent = 'Проверить обновление';
      updateLatencyStamp(ok ? 'Данные актуальны' : 'Не удалось проверить: ' + err);
      if (ok) notifyLatencyChanged();
    }, true);
  });
  updateLatencyStamp();
}

function updateLatencyStamp(msg) {
  var el = document.getElementById('latency-stamp');
  if (!el) return;
  var base = LATENCY_STATE.loaded
    ? 'Данные Gamepadla обновлены: <b>' + fmtUpdated(LATENCY_STATE.updated).split(' ')[0] + '</b>'
    : 'Показаны локальные данные Gamepadla';
  el.innerHTML = base + (msg ? ' · ' + msg : '');
}

function notifyLatencyChanged() {
  latencyListeners.forEach(function(fn) { fn(); });
  updateLatencyStamp();
  if (typeof renderCatalog === 'function') renderCatalog();
}

// ===== СРАВНЕНИЕ 3 МОДЕЛЕЙ ЛИЦОМ К ЛИЦУ =====
var COMPARE_DEFAULTS = ['apex-5', 'flydigi-vader-4-pro', 'gamesir-g7-pro'];
var COMPARE_MAX_MS = 12; // 100% ширины шкалы

function latBar(label, v) {
  var has = typeof v === 'number';
  var pct = has ? Math.min(100, Math.max(4, v / COMPARE_MAX_MS * 100)) : 0;
  var cls = !has ? '' : v <= 5 ? ' good' : v <= 8 ? ' mid' : ' slow';
  return '<div class="cmp-lat"><span class="cmp-lat-l">' + label + '</span>' +
    '<span class="cmp-bar"><i class="' + cls.replace(' ', '') + '" style="width:' + pct.toFixed(1) + '%"></i></span>' +
    '<b class="cmp-lat-v">' + (has ? v.toFixed(1) + ' мс' : 'нет замера') + '</b></div>';
}

function renderCompareBody(g) {
  var l = g.gamepadla || {};
  var media = g.image
    ? '<img src="' + g.image + '" alt="' + g.name + '">'
    : renderTelemetryPlaceholder(g);
  return '<div class="cmp-media">' + media + '</div>' +
    '<h4 class="cmp-name">' + g.name + '</h4>' +
    '<div class="cmp-poll"><span>Частота опроса</span><b>' + (typeof l.pollingRate === 'number' ? l.pollingRate + ' Гц' : '—') + '</b></div>' +
    '<div class="cmp-sub">Задержка кнопок</div>' +
    latBar('Кабель', l.cableBtn) +
    latBar('Донгл', l.dongleBtn) +
    '<ul class="cmp-spec">' +
    '<li><span>Стики</span><b>' + (g.specs && g.specs.sticks || '—') + '</b></li>' +
    '<li><span>Триггеры</span><b>' + (g.specs && g.specs.triggers || '—') + '</b></li>' +
    '<li><span>Цена</span><b class="cmp-price">≈ ' + g.price.toLocaleString('ru-RU') + ' ₽</b></li>' +
    '</ul>' +
    (g.fullReview
      ? '<a class="cmp-open" href="' + g.fullReview + '" data-gamepad-id="' + g.id + '" onclick="return openGamepadModal(event, \'' + g.id + '\')">Открыть карточку →</a>'
      : '');
}

function renderCompare() {
  var box = document.getElementById('compare-grid');
  if (!box) return;
  var list = GAMEPADS.filter(function(g) { return g.price > 0; });
  var options = list.map(function(g) { return '<option value="' + g.id + '">' + g.name + '</option>'; }).join('');
  var slots = [];
  box.innerHTML = '';
  COMPARE_DEFAULTS.forEach(function(defId, i) {
    var card = document.createElement('article');
    card.className = 'cmp-card';
    card.innerHTML = '<select class="cmp-select" aria-label="Модель ' + (i + 1) + '">' + options + '</select><div class="cmp-body"></div>';
    var sel = card.querySelector('select');
    var body = card.querySelector('.cmp-body');
    sel.value = getGamepadById(defId) ? defId : list[i % list.length].id;
    function draw() {
      var g = getGamepadById(sel.value);
      if (g) body.innerHTML = renderCompareBody(g);
    }
    sel.addEventListener('change', draw);
    slots.push(draw);
    box.appendChild(card);
    draw();
  });
  latencyListeners.push(function() { slots.forEach(function(fn) { fn(); }); });
}

// ===== КАТЕГОРИИ =====
const CATEGORIES = {
  all:         { label:"Все",                         filter:function(g){ return g.price > 0; } },
  budget:      { label:"До 3 000 ₽",                  filter:function(g){ return g.price > 0 && g.price <= 3000; } },
  shooter:     { label:"Для шутеров",                 filter:function(g){ return g.genres && g.genres.indexOf("shooter")!==-1; } },
  racing:      { label:"Для гонок",                   filter:function(g){ return g.genres && g.genres.indexOf("racing")!==-1; } },
  nofix:       { label:"Без костылей в Windows",      filter:function(g){ return g.isCrossPlatform === true && g.price > 0; } },
  gyro:        { label:"С гироскопом",                filter:function(g){ return g.hasGyro === true; } },
  fighting:    { label:"Для файтингов",               filter:function(g){ return g.genres && g.genres.indexOf("fighting")!==-1; } },
  arcade:      { label:"Для аркад",                   filter:function(g){ return g.genres && g.genres.indexOf("arcade")!==-1; } },
  certified:   { label:"Сертификат Microsoft",        filter:function(g){ return g.isMicrosoftCertified === true; } }
};

// ===== SVG-PLACEHOLDER =====
var PLACEHOLDER_SVG = '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M6 9h12a4 4 0 014 4l-1 4a2 2 0 01-3.5 1L16 16H8l-1.5 2A2 2 0 013 17l-1-4a4 4 0 014-4z"/><circle cx="8.5" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/><path d="M7 14.5h3M7 13v3"/></svg>';

// Телеметрическая заглушка для геймпадов без фото
function renderTelemetryPlaceholder(g) {
  var tags = [];
  if (g.hasHallEffect) tags.push('HALL');
  if (g.hasGyro) tags.push('GYRO');
  if (g.isWireless) tags.push('WIRELESS');
  if (g.isMicrosoftCertified) tags.push('MS CERT');
  if (g.specLine) tags.unshift(g.specLine);
  var meta = tags.length ? tags.join(' · ') : 'NO IMAGE';
  return '<div class="telemetry-ph">'
    + '<span class="telemetry-ph-icon">' + PLACEHOLDER_SVG + '</span>'
    + '<span class="telemetry-ph-name">' + g.name + '</span>'
    + '<span class="telemetry-ph-spec">' + meta + '</span>'
    + '<span class="telemetry-ph-tag">IMG // N/A</span>'
    + '</div>';
}

// ===== СЛОВА ДЛЯ СЧЁТЧИКОВ =====
function wordForCount(n, one, few, many) {
  var mod10 = n % 10;
  var mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

// Технические бейджи на превью: опрос, задержка, тип стиков
function renderSpecBadges(g) {
  if (g.price === 0) return '';
  var b = [];
  if (typeof g.pollingRateHz === 'number') b.push('<li title="Частота опроса">' + g.pollingRateHz + ' Гц</li>');
  if (hasLatency(g)) b.push('<li title="' + latencyLine(g).replace(/"/g, '&quot;') + '">' + g.wiredLatencyMs.toFixed(1) + ' мс</li>');
  b.push('<li title="Тип стиков">' + (g.hasHallEffect ? 'HALL/TMR' : 'ANALOG') + '</li>');
  return '<ul class="spec-badges">' + b.join('') + '</ul>';
}

// ===== МАГАЗИНЫ И ЗАДЕРЖКИ (Gamepadla) =====
var SHOPS = [
  { key: 'ozon', label: 'Ozon' },
  { key: 'wb', label: 'Wildberries' },
  { key: 'aliexpress', label: 'AliExpress' }
];

function fmtMs(v) { return typeof v === 'number' ? v.toFixed(1) : '—'; }

function shopPrice(p) { return p && typeof p.price === 'number' && p.price > 0 ? '~' + p.price.toLocaleString('ru-RU') + ' ₽' : '—'; }

// Крупные плашки магазинов для модалки
function renderShopButtons(g) {
  if (!g.prices) return '';
  return SHOPS.map(function(sh) {
    var p = g.prices[sh.key];
    if (!p || !p.url) return '';
    return '<a class="shop-btn shop-' + sh.key + '" href="' + p.url + '" target="_blank" rel="noopener">' +
      '<span class="shop-name">' + sh.label + '</span><span class="shop-price">' + shopPrice(p) + '</span><span class="shop-go">↗</span></a>';
  }).join('');
}

// Компактная строка в карточке каталога (карточка — это <a>, поэтому без вложенных ссылок)
function renderCardPrices(g) {
  if (!g.prices || g.price === 0) return '';
  var items = SHOPS.map(function(sh) {
    var p = g.prices[sh.key];
    if (!p || !p.url) return '';
    return '<span class="cp-item" role="link" tabindex="0" data-href="' + p.url + '" onclick="return openShopLink(event, this)" onkeydown="if(event.keyCode===13)return openShopLink(event, this)">' +
      sh.label + ' <b>' + shopPrice(p) + '</b> ↗</span>';
  }).join('');
  return '<div class="card-prices" aria-label="Где купить">' + items + '</div>';
}

function openShopLink(e, el) {
  e.preventDefault();
  e.stopPropagation();
  window.open(el.getAttribute('data-href'), '_blank', 'noopener');
  return false;
}

// Телеметрическая таблица задержек
function renderModalLatency(g) {
  var l = g.gamepadla;
  if (!l) return '';
  var rows = [
    ['Отклик кнопок, мс', l.cableBtn, l.dongleBtn, l.btBtn],
    ['Отклик стиков, мс', l.cableStick, l.dongleStick, l.btStick]
  ];
  var body = rows.map(function(r) {
    return '<tr><th scope="row">' + r[0] + '</th><td>' + fmtMs(r[1]) + '</td><td>' + fmtMs(r[2]) + '</td><td>' + fmtMs(r[3]) + '</td></tr>';
  }).join('');
  return '<div class="modal-latency">' +
    '<h4>Задержки (Gamepadla)</h4>' +
    '<table class="mlat-table"><thead><tr><th></th><th>Кабель</th><th>Донгл 2.4 ГГц</th><th>Bluetooth</th></tr></thead><tbody>' + body + '</tbody></table>' +
    '<div class="mlat-foot"><span>Частота опроса: <b>' + (typeof l.pollingRate === 'number' ? l.pollingRate + ' Гц' : '—') + '</b></span>' +
    (l.url ? '<a href="' + l.url + '" target="_blank" rel="noopener">Источник: Gamepadla ↗</a>' : '') + '</div>' +
  '</div>';
}

// ===== РЕНДЕР КАРТОЧКИ =====
function renderCard(g, index) {
  var isPlaceholder = g.price === 0;
  var hasReview = !isPlaceholder && g.fullReview;

  var media = '';
  if (g.image) {
    media = '<img src="' + g.image + '" alt="' + g.name + '" class="gamepad-image">';
  } else {
    media = renderTelemetryPlaceholder(g);
  }

  var metaLine = isPlaceholder
    ? 'Данные не заполнены'
    : 'Куплен в ' + g.purchaseDate + ' · ' + g.price.toLocaleString('ru-RU') + ' ₽ · ' + g.usageMonths + ' мес.';

  var specLine = g.specLine || '';
  var specIndex = String(index + 1).padStart(2, '0') + (specLine ? ' · ' + specLine : '');

  var inner = '<div class="card-media">' + media + renderSpecBadges(g) + '</div>'
    + '<div class="card-info" data-index="' + specIndex + '">'
    + '<h3>' + g.name + '</h3>'
    + '<p class="meta">' + metaLine + '</p>'
    + '<p class="desc">' + g.description + '</p>'
    + '<div class="card-footer">'
    + '<p class="verdict">' + g.verdict + '</p>'
    + (hasReview ? '<span class="review-link">ПОЛНЫЙ ОБЗОР →</span>' : '')
    + '</div>'
    + renderCardPrices(g)
    + '</div>';

  var cardClass = 'gamepad-card';
  if (isPlaceholder) cardClass += ' placeholder';

  if (hasReview) {
    return '<a class="' + cardClass + '" href="' + g.fullReview + '" data-gamepad-id="' + g.id + '" onclick="return openGamepadModal(event, \'' + g.id + '\')">' + inner + '</a>';
  } else {
    return '<div class="' + cardClass + '">' + inner + '</div>';
  }
}

// ===== РЕНДЕР СПИСКА =====
function renderGamepads(list, containerId) {
  containerId = containerId || 'gamepad-list';
  var container = document.getElementById(containerId);
  if (!container) { console.error('Не найден контейнер #' + containerId); return; }
  if (!list.length) {
    container.innerHTML = '<div class="empty-state"><p style="font-size:18px;margin-bottom:8px;">Ничего не найдено</p><p style="font-size:14px;">Измените запрос или сбросьте фильтр.</p><a href="reviews.html" class="btn btn-secondary" style="margin-top:20px;display:inline-block;">Сбросить</a></div>';
    return;
  }
  container.innerHTML = list.map(function(g, i) { return renderCard(g, i); }).join('');
}

// ===== ФИЛЬТРАЦИЯ =====
function filterGamepads(opts) {
  opts = opts || {};
  var q = (opts.q || '').toLowerCase().trim();
  var cat = opts.cat || '';
  var list = GAMEPADS.slice();
  if (cat && CATEGORIES[cat]) {
    list = list.filter(CATEGORIES[cat].filter);
  }
  if (q) {
    // поиск по задержке: «2 мс», «<3», «1000 гц»
    var num = parseFloat(q.replace(',', '.').replace(/[^0-9.]/g, ''));
    var lt = q.charAt(0) === '<';
    if (!isNaN(num) && (lt || /мс|ms|гц|hz/.test(q))) {
      var hz = /гц|hz/.test(q);
      return list.filter(function(g) {
        if (!hasLatency(g)) return false;
        return hz ? g.pollingRateHz >= num : bestLatency(g) <= num;
      });
    }
    list = list.filter(function(g) {
      return g.name.toLowerCase().indexOf(q) !== -1
        || g.description.toLowerCase().indexOf(q) !== -1
        || g.verdict.toLowerCase().indexOf(q) !== -1;
    });
  }
  return list;
}

// ===== ОБНОВЛЕНИЕ СЧЁТЧИКОВ НА ГЛАВНОЙ =====
function updateCounters() {
  Object.keys(CATEGORIES).forEach(function(key) {
    var el = document.getElementById('count-' + key);
    if (el) {
      var count = GAMEPADS.filter(function(g) {
        return g.price > 0 && CATEGORIES[key].filter(g);
      }).length;
      el.textContent = count + ' ' + wordForCount(count, 'обзор', 'обзора', 'обзоров');
    }
  });
  var accEl = document.getElementById('count-accessories');
  if (accEl) {
    accEl.textContent = '3 ' + wordForCount(3, 'позиция', 'позиции', 'позиций');
  }
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
var catalogState = { q: '', cat: 'all' };

function renderCatalog() {
  if (!document.getElementById('gamepad-list')) return;
  var filtered = filterGamepads({ q: catalogState.q, cat: catalogState.cat }).filter(function(g) { return g.price > 0; });
  if (catalogState.sort === 'latency') filtered.sort(function(a, b) { return bestLatency(a) - bestLatency(b); });
  else if (catalogState.sort === 'polling') filtered.sort(function(a, b) { return (b.pollingRateHz || 0) - (a.pollingRateHz || 0); });
  renderGamepads(filtered, 'gamepad-list');

  var title = document.getElementById('reviews-title');
  if (title) {
    var cat = catalogState.cat, q = catalogState.q;
    var catLabel = (cat && cat !== 'all' && CATEGORIES[cat]) ? CATEGORIES[cat].label : '';
    var qLabel = q ? 'по запросу «' + q + '»' : '';
    var parts = [catLabel, qLabel].filter(Boolean).join(' · ');
    title.innerHTML = 'Каталог обзоров' + (parts
      ? ' <span style="font-size:16px;font-weight:500;color:var(--text-3);display:block;margin-top:8px;">Фильтр: ' + parts + ' · найдено ' + filtered.length + '</span>'
      : '');
  }
  document.querySelectorAll('.filter-tag').forEach(function(t) {
    t.classList.toggle('active', t.dataset.filter === catalogState.cat);
  });
  var input = document.getElementById('catalog-search-input');
  if (input && input.value !== catalogState.q) input.value = catalogState.q;
}

// Вызывается вкладкой «Каталог обзоров»: opts = { q, cat }
window.setCatalogFilter = function(opts) {
  opts = opts || {};
  catalogState.q = opts.q || '';
  catalogState.cat = (opts.cat && CATEGORIES[opts.cat]) ? opts.cat : 'all';
  renderCatalog();
};

function init() {
  var params = new URLSearchParams(window.location.search);
  catalogState.q = params.get('q') || '';
  catalogState.cat = params.get('cat') || 'all';
  if (!CATEGORIES[catalogState.cat]) catalogState.cat = 'all';

  renderCatalog();

  renderNews();
  renderLatencyTable();
  renderCompare();
  // Подгружаем gamepadla-data.json; без сервера (file://) остаются значения из data.js
  loadLatencyData(function(ok) { if (ok) notifyLatencyChanged(); else updateLatencyStamp(); });
  var sortEl = document.getElementById('sort-select');
  if (sortEl) sortEl.addEventListener('change', function() { catalogState.sort = sortEl.value; renderCatalog(); });

  updateCounters();
  renderGuides();

  // Фильтры-теги каталога
  document.querySelectorAll('.filter-tag').forEach(function(tag) {
    tag.addEventListener('click', function() {
      catalogState.cat = tag.dataset.filter;
      renderCatalog();
    });
  });

  // Поиск (главная и каталог) -> экран каталога
  ['home-search', 'catalog-search'].forEach(function(id) {
    var form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var q = form.querySelector('input').value;
      if (typeof window.showTab === 'function') window.showTab('catalog', { q: q, cat: 'all' });
      else window.setCatalogFilter({ q: q });
    });
  });

  // Быстрые теги в hero -> каталог с фильтром
  document.querySelectorAll('.hero-tag[data-quick]').forEach(function(el) {
    el.addEventListener('click', function() {
      var cat = el.getAttribute('data-quick');
      if (typeof window.showTab === 'function') window.showTab('catalog', { cat: cat });
      else window.setCatalogFilter({ cat: cat });
    });
  });

  // Подборки из футера -> каталог с фильтром
  document.querySelectorAll('[data-footer-filter]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var cat = el.getAttribute('data-footer-filter');
      if (typeof window.showTab === 'function') window.showTab('catalog', { cat: cat });
      else window.setCatalogFilter({ cat: cat });
    });
  });

  // Карточки категорий на главной -> каталог с фильтром
  document.querySelectorAll('.cat[data-cat]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof window.showTab === 'function') window.showTab('catalog', { cat: el.getAttribute('data-cat') });
    });
  });
}

// ===== БАЗА ЗНАНИЙ: ШПАРГАЛКИ =====
var GUIDES = [
  { id: 'check-new', tag: 'Покупка', time: '5 мин', title: 'Как проверить новый геймпад при получении',
    summary: 'Чек-лист на 5 минут: дрифт, кнопки, вибрация, люфты.',
    body: '<p>Подключите геймпад и откройте тестер на этом сайте — он покажет все оси и кнопки.</p><ul><li>Отпустите стики: значения должны быть около 0.00. Дрейф больше 0.05 — повод для возврата.</li><li>Нажмите каждую кнопку B0–B16, убедитесь, что нет залипаний и двойных срабатываний.</li><li>Запустите «Test Circularity» и прокрутите стики по кругу: фигура должна быть ровной окружностью.</li><li>Проверьте вибрацию обоих моторов и плавный ход триггеров LT/RT.</li><li>Осмотрите корпус: зазоры, скрип, люфт шляпок стиков.</li></ul>' },
  { id: 'dualsense-wireless', tag: 'Подключение', time: '10 мин', title: 'Настройка DualSense на ПК без проводов',
    summary: 'Bluetooth-подключение, Steam Input и частые проблемы.',
    body: '<p>DualSense работает по Bluetooth без адаптера, если у ПК есть Bluetooth 4.0+.</p><ul><li>Зажмите кнопки PS + Create до быстрого мигания световой панели.</li><li>Добавьте устройство в Windows: Параметры → Bluetooth → «Беспроводной контроллер».</li><li>Для игр без поддержки DualSense включите Steam Input и добавьте игру в Steam.</li><li>Если геймпад отваливается — отключите экономию энергии для Bluetooth-адаптера в диспетчере устройств.</li></ul>' },
  { id: 'hall-vs-pot', tag: 'Теория', time: '4 мин', title: 'Датчики Холла vs потенциометры',
    summary: 'Почему одни стики дрейфуют через год, а другие — нет.',
    body: '<p>Потенциометр — это контакт, который трётся о резистивную дорожку, поэтому изнашивается и начинает дрейфовать. Датчик Холла измеряет положение магнита без контакта.</p><ul><li>Холл: нет износа, стабильный центр, обычно дороже на 500–1500 ₽.</li><li>Потенциометр: дёшево, легко заменить, но ресурс ограничен.</li><li>Если вы много играете в шутеры и гонки — выбирайте Холл.</li></ul>' },
  { id: 'deadzones', tag: 'Настройка', time: '8 мин', title: 'Как убрать мёртвые зоны в играх',
    summary: 'Внутренняя и внешняя мёртвая зона, кривые отклика.',
    body: '<p>Мёртвая зона нужна, чтобы дрейф не двигал камеру. Но слишком большая делает управление «ватным».</p><ul><li>Измерьте дрейф в тестере и поставьте внутреннюю зону чуть выше этого значения.</li><li>В играх без настроек используйте Steam Input: «Мёртвая зона» и «Кривая отклика».</li><li>Для гонок уменьшайте внутреннюю зону руления до 0–3% и правьте линейность.</li><li>Внешнюю зону ставьте 95–98%, чтобы стик достигал максимума.</li></ul>' },
  { id: 'xinput-dinput', tag: 'Совместимость', time: '6 мин', title: 'XInput или DInput: что выбрать',
    summary: 'Режимы работы геймпада и когда переключаться.',
    body: '<p>XInput поддерживается почти всеми современными играми, DInput нужен старым играм и эмуляторам.</p><ul><li>Большинство геймпадов переключаются зажатием кнопки при включении (см. инструкцию).</li><li>Если игра не видит геймпад — переключите режим на XInput.</li><li>Для старых игр используйте обёртки вроде x360ce или Steam Input.</li></ul>' },
  { id: 'battery-care', tag: 'Уход', time: '3 мин', title: 'Как продлить жизнь батареи и стиков',
    summary: 'Заряд, хранение, чистка шляпок стиков.',
    body: '<p>Несколько привычек, которые заметно продлевают срок службы геймпада.</p><ul><li>Не оставляйте аккумулятор полностью разряженным надолго.</li><li>Протирайте шляпки стиков спиртовой салфеткой раз в месяц.</li><li>Храните геймпад вдали от прямого солнца и влаги.</li><li>Не тяните за кабель — берегите разъём USB.</li></ul>' },
  { id: 'steam-input', tag: 'Настройка', time: '7 мин', title: 'Steam Input: один профиль для любого геймпада',
    summary: 'Как заставить Steam видеть геймпад и переназначить кнопки.',
    body: '<p>Steam Input превращает почти любой геймпад в стандартный XInput-контроллер.</p><ul><li>Откройте Steam → Настройки → Контроллер и включите поддержку вашего типа геймпада.</li><li>Для игр не из Steam: «Добавить игру» → «Добавить стороннюю игру» и запускайте через Steam.</li><li>В настройках раскладки меняйте кнопки, мёртвые зоны и включайте гироскоп.</li></ul>' },
  { id: 'bluetooth-fix', tag: 'Подключение', time: '5 мин', title: 'Что делать, если Bluetooth-геймпад отваливается',
    summary: 'Частые причины разрывов связи и быстрые способы их убрать.',
    body: '<p>Нестабильный Bluetooth в Windows — обычно вопрос настроек питания и помех.</p><ul><li>Отключите энергосбережение адаптера в диспетчере устройств.</li><li>Уберите геймпад от Wi-Fi-роутера и USB 3.0 портов — они создают помехи.</li><li>Удалите устройство и подключите заново; обновите драйвер адаптера.</li><li>Если не помогает — используйте USB-кабель или 2.4 ГГц-донгл.</li></ul>' },
  { id: 'stick-drift', tag: 'Уход', time: '5 мин', title: 'Дрейф стиков: диагностика и что делать',
    summary: 'Как отличить дрейф от грязи и когда нужен ремонт.',
    body: '<p>Дрейф — самопроизвольное смещение стика в нейтральном положении.</p><ul><li>Проверьте значения в тестере: при отпущенных стиках должно быть около 0.00.</li><li>Продуйте основание стика сжатым воздухом и покрутите его несколько раз.</li><li>Увеличьте внутреннюю мёртвую зону как временное решение.</li><li>Если дрейф больше 0.05 — меняйте модуль стика или геймпад по гарантии.</li></ul>' },
  { id: 'latency-polling', tag: 'Теория', time: '6 мин', title: 'Задержка и частота опроса: на что смотреть',
    summary: 'Чем 1000 Гц отличается от 125 Гц и когда это реально чувствуется.',
    body: '<p>Частота опроса — сколько раз в секунду ПК получает состояние геймпада. При 125 Гц это 8 мс между отчётами, при 1000 Гц — 1 мс. Задержка — полное время от нажатия до появления отчёта на ПК.</p><ul><li>В шутерах, файтингах и ритм-играх разницу в 4–8 мс при опыте можно почувствовать.</li><li>В гонках и RPG выше 250 Гц заметного выигрыша обычно нет — важнее качество стика.</li><li>Bluetooth ограничивает опрос (часто 125 Гц), 2.4 ГГц-донгл и USB дают 500–1000 Гц.</li><li>Сравнивайте только замеры одного метода: в нашей таблице данные в стиле Gamepadla, значения ориентировочные.</li></ul><p>Проверить отклик своего геймпада можно во вкладке «Тестер геймпада».</p>' },
  { id: 'forza-pad-setup', tag: 'Настройка', time: '7 мин', title: 'Настройка геймпада для Forza: Advanced Controls',
    summary: 'Мёртвые зоны, линейность и триггеры для Forza Horizon и Motorsport.',
    body: '<p>В Forza все параметры лежат в Настройки → Управление → Advanced Controls. Стартовая точка для большинства геймпадов — минимальная внутренняя зона и линейность 50.</p><ul><li>Steering Inside: 0–2 для геймпадов на Холле, 3–6 для потенциометров с лёгким дрейфом.</li><li>Steering Outside: 95–100, чтобы стик давал полный угол поворота.</li><li>Acceleration/Deceleration Inside 0, Outside 100 — линейная педаль; для мощных RWD-машин поднимайте Inside до 5–10 против пробуксовки.</li><li>Steering Linearity ниже 50 делает руль острее у центра, выше — мягче.</li></ul><p>Готовые наборы от коммьюнити смотрите во вкладке «Forza Hall».</p>' },
  { id: 'wired-vs-wireless', tag: 'Покупка', time: '4 мин', title: 'Проводной или беспроводной геймпад',
    summary: 'Задержка, автономность и цена: что выбрать для ПК.',
    body: '<p>Современные 2.4 ГГц-донглы почти догнали кабель, но компромиссы остаются.</p><ul><li>Провод: минимальная задержка, не нужна зарядка, обычно дешевле на 1000–2000 ₽ — лучший выбор для файтингов.</li><li>2.4 ГГц: задержка на 1–2 мс выше, нужен USB-порт под донгл, автономность 15–40 часов.</li><li>Bluetooth: удобно для ноутбука и планшета, но выше задержка и больше разрывов связи.</li><li>Если играете по 3+ часа подряд — берите модель, которую можно использовать по кабелю во время зарядки.</li></ul>' },
  { id: 'fake-check', tag: 'Покупка', time: '5 мин', title: 'Как отличить подделку DualSense и Xbox Controller',
    summary: 'Признаки копии: вес, маркировка, поведение в тестере.',
    body: '<p>Подделки встречаются на маркетплейсах, особенно среди «бывших в употреблении» контроллеров.</p><ul><li>Вес и пластик: копии заметно легче или шероховатые, швы корпуса неровные.</li><li>Маркировка на задней стороне должна быть чёткой и совпадать с коробкой.</li><li>В тестере проверьте число кнопок и осей: у копий часто нет гироскопа или адаптивных триггеров.</li><li>Быстрый дрейф стиков через месяц — типичный признак дешёвых потенциометров.</li></ul><p>Покупайте у официальных продавцов и сохраняйте чек для возврата.</p>' }
];

// ===== НОВОСТИ =====
var NEWS = [
  { id: 'tmr-sticks', url: 'https://www.reddit.com/r/Controller/', tag: 'NEWS // ИНДУСТРИЯ', date: '18 ноября 2026', title: 'Новые модели переходят на TMR-стики вместо обычного Холла',
    summary: 'Туннельный магниторезистор обещает меньший расход энергии и более чистый сигнал у центра.',
    body: '<p>Производители всё чаще заменяют датчики Холла на TMR (туннельное магнитное сопротивление) в стиках новых геймпадов.</p><ul><li>Меньшее энергопотребление — геймпад дольше держит заряд.</li><li>Более высокая точность и стабильность около центра.</li><li>Износа, как у потенциометров, нет — дрейф по-прежнему не страшен.</li></ul><p>Пока такие модели дороже, но разница в цене постепенно сокращается. Мы возьмём первые TMR-геймпады на длительный тест.</p>' },
  { id: 'steam-gyro', url: 'https://store.steampowered.com/news/', tag: 'ОБНОВЛЕНИЯ', date: '12 ноября 2026', title: 'Steam Input: улучшенная поддержка гироскопа на ПК',
    summary: 'Обновление клиента Steam добавило более гибкую калибровку и режимы гироприцеливания.',
    body: '<p>В свежем обновлении Steam Input появились улучшенная калибровка гироскопа и новые режимы его работы.</p><ul><li>Отдельная чувствительность по осям и сглаживание дрожания.</li><li>Включение гиро по касанию стика или по удержанию кнопки.</li><li>Лучшая работа с DualSense и другими геймпадами с гироскопом.</li></ul><p>Особенно заметно улучшение в шутерах, где гироскоп помогает точной доводке прицела.</p>' },
  { id: 'dongle-1000', url: 'https://www.reddit.com/r/Controller/top/?t=month', tag: 'NEWS // ИНДУСТРИЯ', date: '5 ноября 2026', title: 'Выходят беспроводные донглы с частотой опроса 1000 Гц',
    summary: 'Задержка по радиоканалу 2.4 ГГц приближается к проводному подключению.',
    body: '<p>Новые донглы 2.4 ГГц поддерживают опрос на 1000 Гц, что уменьшает задержку до значений, близких к USB-кабелю.</p><ul><li>Заметный выигрыш в файтингах и шутерах.</li><li>Bluetooth по-прежнему ограничен по частоте опроса.</li><li>Донгл обычно идёт в комплекте или продаётся отдельно.</li></ul>' },
  { id: 'xbox-dualsense', url: 'https://news.xbox.com/', tag: 'ОБНОВЛЕНИЯ', date: '29 октября 2026', title: 'Сравнение ревизий Xbox и DualSense',
    summary: 'Что изменилось в последних партиях контроллеров Microsoft и Sony.',
    body: '<p>Мы сравнили последние ревизии Xbox Wireless Controller и Sony DualSense.</p><ul><li>Xbox: обновлённые триггеры и улучшенное Bluetooth-соединение.</li><li>DualSense: доработанные стики и более ёмкая батарея в новых партиях.</li><li>Совместимость с ПК у обоих осталась на высоком уровне.</li></ul><p>Подробности по каждому — в разделе «Каталог обзоров».</p>' },
  { id: 'drift-tips', url: 'https://www.reddit.com/r/Controller/', tag: 'ГАЙДЫ', date: '20 октября 2026', title: 'Как проверить стик на дрейф за минуту',
    summary: 'Простой тест в браузере поможет понять, пора ли менять стики или всё дело в мёртвой зоне.',
    body: '<p>Откройте онлайн-тестер на сайте и проверьте отклонение стиков в покое.</p>' },
];

var NEWS_SOURCES = [
  { label: 'REDDIT // R/CONTROLLER', url: 'https://www.reddit.com/r/Controller/top/.rss?t=week', filter: false },
  { label: 'STEAM NEWS', url: 'https://store.steampowered.com/feeds/news.xml', filter: true }
];
var NEWS_KEYWORDS = /gamepad|controller|dualsense|xbox|8bitdo|flydigi|геймпад|контроллер/i;
var NEWS_CACHE_KEY = 'gh_news_v1';
var NEWS_TTL = 6 * 60 * 60 * 1000;

function escNews(s) {
  return String(s).replace(/[&<>"']/g, function(c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function stripNews(html, max) {
  var d = document.createElement('div');
  d.innerHTML = html || '';
  var t = (d.textContent || '').replace(/\s+/g, ' ').trim();
  t = t.replace(/\[(link|comments)\]|submitted by\s+\/u\/\S+/gi, '').trim();
  return t.length > max ? t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…' : t;
}

function fmtNewsDate(ts) {
  return new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function fetchNewsSource(src) {
  var api = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(src.url);
  return fetch(api).then(function(r) { return r.json(); }).then(function(j) {
    if (!j || j.status !== 'ok') throw new Error('rss');
    return j.items.map(function(it) {
      var ts = Date.parse(String(it.pubDate).replace(' ', 'T') + 'Z');
      return {
        source: src.label,
        ts: isNaN(ts) ? Date.now() : ts,
        title: stripNews(it.title, 140),
        summary: stripNews(it.description || it.content, 120),
        link: it.link
      };
    }).filter(function(n) {
      return n.link && n.title && (!src.filter || NEWS_KEYWORDS.test(n.title + ' ' + n.summary));
    });
  });
}

function loadLiveNews() {
  try {
    var c = JSON.parse(localStorage.getItem(NEWS_CACHE_KEY) || 'null');
    if (c && c.items && c.items.length && Date.now() - c.time < NEWS_TTL) return Promise.resolve(c.items);
  } catch (e) {}
  return Promise.all(NEWS_SOURCES.map(function(s) {
    return fetchNewsSource(s).catch(function() { return []; });
  })).then(function(res) {
    var items = [].concat.apply([], res).sort(function(a, b) { return b.ts - a.ts; }).slice(0, 5);
    if (!items.length) throw new Error('empty');
    try { localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({ time: Date.now(), items: items })); } catch (e) {}
    return items;
  });
}

function newsCardHtml(n, i) {
  var feat = i === 0;
  return '<article class="news-card">' +
    '<div class="news-meta"><span class="news-tag">' + escNews(n.source) + '</span><span class="news-date">' + escNews(n.dateText) + '</span></div>' +
    '<h3>' + escNews(n.title) + '</h3>' +
    '<p>' + escNews(n.summary) + '</p>' +
    '<a href="' + escNews(n.link) + '" class="review-link" target="_blank" rel="noopener">Открыть источник ↗</a>' +
    '</article>';
}

function fallbackNewsItems() {
  return NEWS.map(function(n) {
    return { source: n.tag, dateText: n.date, title: n.title, summary: n.summary, link: n.url };
  });
}

function renderNewsFallback(box) {
  box.innerHTML = fallbackNewsItems().slice(0, 4).map(newsCardHtml).join('');
}

function renderNews() {
  var box = document.getElementById('news-list');
  if (!box) return;
  var sk = '';
  for (var i = 0; i < 4; i++) {
    sk += '<article class="news-card news-skeleton"><span class="sk sk-s"></span><span class="sk sk-t"></span><span class="sk sk-t"></span><span class="sk sk-p"></span><span class="sk sk-p"></span></article>';
  }
  box.innerHTML = sk;
  loadLiveNews().then(function(items) {
    var cards = items.filter(function(n) { return /^https?:\/\//i.test(n.link); }).map(function(n) {
      return { source: n.source, dateText: fmtNewsDate(n.ts), title: n.title, summary: n.summary, link: n.link };
    });
    // добираем резервными новостями до 4 карточек, чтобы сетка была заполнена
    var fb = fallbackNewsItems();
    for (var k = 0; cards.length < 4 && k < fb.length; k++) cards.push(fb[k]);
    box.innerHTML = cards.slice(0, 4).map(newsCardHtml).join('');
  }).catch(function() { renderNewsFallback(box); });
}

function openNewsModal(e, id) {
  e.preventDefault();
  var n = NEWS.filter(function(x) { return x.id === id; })[0];
  if (!n) return false;
  var modal = document.getElementById('gamepad-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gamepad-modal';
    modal.className = 'gamepad-modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = '<div class="modal-overlay" onclick="closeGamepadModal()">' +
    '<div class="modal-content modal-guide" onclick="event.stopPropagation()">' +
      '<button class="modal-close" onclick="closeGamepadModal()" aria-label="Закрыть">✕</button>' +
      '<div class="modal-body modal-body-single">' +
        '<div class="modal-right">' +
          '<h2>' + n.title + '</h2>' +
          '<p class="modal-meta">' + n.tag + ' · ' + n.date + '</p>' +
          '<div class="guide-text">' + n.body + '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  return false;
}

function renderGuides() {
  var box = document.getElementById('kb-grid');
  if (!box) return;
  var qEl = document.getElementById('kb-search');
  var chipsEl = document.getElementById('kb-chips');
  var state = { q: '', tag: 'Все' };
  function draw() {
    var q = state.q.toLowerCase();
    var list = GUIDES.filter(function(g) {
      if (state.tag !== 'Все' && g.tag !== state.tag) return false;
      return !q || (g.title + ' ' + g.summary + ' ' + g.tag).toLowerCase().indexOf(q) !== -1;
    });
    box.innerHTML = list.length ? list.map(function(g) {
      return '<a class="kb-card" data-category="' + g.tag + '" href="#guides" onclick="return openGuideModal(event, \'' + g.id + '\')">' +
        '<span class="kb-tag"><span class="kb-tag-name">' + g.tag + '</span><span class="kb-tag-time">· ' + g.time + '</span></span>' +
        '<h3>' + g.title + '</h3>' +
        '<p>' + g.summary + '</p>' +
        '<span class="review-link kb-more">Читать →</span>' +
        '</a>';
    }).join('') : '<p class="kb-empty">Ничего не найдено — попробуйте другой запрос или тему.</p>';
  }
  if (qEl) qEl.addEventListener('input', function() { state.q = qEl.value; draw(); });
  if (chipsEl) chipsEl.addEventListener('click', function(e) {
    var b = e.target.closest ? e.target.closest('[data-tag]') : null;
    if (!b) return;
    state.tag = b.getAttribute('data-tag');
    var all = chipsEl.querySelectorAll('[data-tag]');
    for (var i = 0; i < all.length; i++) all[i].classList.toggle('active', all[i] === b);
    draw();
  });
  draw();
}

function openGuideModal(e, id) {
  e.preventDefault();
  var g = GUIDES.filter(function(x) { return x.id === id; })[0];
  if (!g) return false;
  var modal = document.getElementById('gamepad-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gamepad-modal';
    modal.className = 'gamepad-modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = '<div class="modal-overlay" onclick="closeGamepadModal()">' +
    '<div class="modal-content modal-guide" onclick="event.stopPropagation()">' +
      '<button class="modal-close" onclick="closeGamepadModal()" aria-label="Закрыть">✕</button>' +
      '<div class="modal-body modal-body-single">' +
        '<div class="modal-right">' +
          '<h2>' + g.title + '</h2>' +
          '<p class="modal-meta">' + g.tag + ' · ' + g.time + ' чтения</p>' +
          '<div class="guide-text">' + g.body + '</div>' +
          '<a href="reviews.html#tester" class="modal-tester-btn" onclick="return goToTester(event)">Открыть тестер геймпада →</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  return false;
}

// ===== МОДАЛЬНОЕ ОКНО С ПОЛНЫМ ОБЗОРОМ =====
function getGamepadById(id) {
  return GAMEPADS.find(function(g) { return g.id === id; });
}

function openGamepadModal(e, gamepadId) {
  e.preventDefault();
  var gamepad = getGamepadById(gamepadId);
  if (!gamepad) return;

  var modal = document.getElementById('gamepad-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gamepad-modal';
    modal.className = 'gamepad-modal';
    document.body.appendChild(modal);
  }

  var image = gamepad.image ? '<img src="' + gamepad.image + '" alt="' + gamepad.name + '" class="modal-image">' : '<div class="modal-placeholder">' + renderTelemetryPlaceholder(gamepad) + '</div>';

  var specsHtml = '<div class="modal-specs-row">' +
    '<span class="modal-spec-label">Стики:</span> <strong>' + gamepad.specs.sticks + '</strong>' +
    '</div>' +
    '<div class="modal-specs-row">' +
    '<span class="modal-spec-label">Триггеры:</span> <strong>' + gamepad.specs.triggers + '</strong>' +
    '</div>' +
    '<div class="modal-specs-row">' +
    '<span class="modal-spec-label">Подключение & отклик:</span> <strong>' + gamepad.specs.connection + '</strong>' +
    '</div>' +
    '<div class="modal-specs-row">' +
    '<span class="modal-spec-label">Автономность:</span> <strong>' + gamepad.specs.battery + '</strong>' +
    '</div>' +
    '<div class="modal-specs-row">' +
    '<span class="modal-spec-label">Вес:</span> <strong>' + gamepad.specs.weight + '</strong>' +
    '</div>';

  var prosHtml = '<div class="modal-column"><h4>За что брать</h4><ul>';
  for (var i = 0; i < gamepad.pros.length; i++) {
    prosHtml += '<li>• ' + gamepad.pros[i] + '</li>';
  }
  prosHtml += '</ul></div>';

  var consHtml = '<div class="modal-column"><h4>С чем мириться</h4><ul>';
  for (var i = 0; i < gamepad.cons.length; i++) {
    consHtml += '<li>• ' + gamepad.cons[i] + '</li>';
  }
  consHtml += '</ul></div>';

  var html = '<div class="modal-overlay" onclick="closeGamepadModal()">' +
    '<div class="modal-content" onclick="event.stopPropagation()">' +
      '<button class="modal-close" onclick="closeGamepadModal()" aria-label="Закрыть">✕</button>' +
      '<div class="modal-body">' +
        '<div class="modal-left">' + image + '</div>' +
        '<div class="modal-right">' +
          '<h2>' + gamepad.name + '</h2>' +
          '<p class="modal-meta">Куплен в ' + gamepad.purchaseDate + ' · ' + gamepad.price.toLocaleString('ru-RU') + ' ₽ · ' + gamepad.usageMonths + ' мес. тестирования</p>' +
          '<div class="modal-specs">' + specsHtml + '</div>' +
        '</div>' +
      '</div>' +
      renderModalLatency(gamepad) +
      '<div class="modal-review">' +
        '<div class="modal-pros-cons">' + prosHtml + consHtml + '</div>' +
      '</div>' +
      '<div class="modal-owner">' +
        '<span class="modal-owner-tag">МОЙ ОПЫТ ВЛАДЕНИЯ</span>' +
        '<h4>После ' + gamepad.usageMonths + ' ' + wordForCount(gamepad.usageMonths, 'месяца', 'месяцев', 'месяцев') + ' тестов</h4>' +
        '<p>' + (gamepad.myReview || gamepad.fullVerdict || '') + '</p>' +
      '</div>' +
      '<div class="modal-buy">' +
        '<h4>Где купить / Актуальные цены</h4>' +
        '<div class="modal-buy-row">' + renderShopButtons(gamepad) +
          '<a href="index.html#tester" class="modal-tester-btn" onclick="return goToTester(event)">Проверить геймпад в тестере →</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  modal.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGamepadModal();
});

function goToTester(e) {
  if (!document.getElementById('view-tester')) return true; // на другой странице — обычный переход по ссылке
  e.preventDefault();
  closeGamepadModal();
  location.hash = '#tester';
  return false;
}

function closeGamepadModal() {
  var modal = document.getElementById('gamepad-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
// ===== FORZA HALL =====
var FORZA_HALL = [
  { id: 'fh-1', team: 'ESV', rankBadge: '⚡ GT2 / TORA PRO', nickname: 'ESV Aventra', tag: 'Коммьюнити ESV • Гайды и GT2', game: 'Forza Motorsport', gamepad: 'GameSir G7 Pro', settings: { steeringInside: 0, steeringOutside: 100, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Simulation', note: 'Точный проводной контроллер с TMR-стиками и высокой частотой опроса; идеален для микрокоррекций в GT2 и Rivals.', links: [{ t: 'YouTube', u: 'https://www.youtube.com/@ESV_Aventra' }, { t: 'Twitch', u: 'https://www.twitch.tv/esv_aventra' }] },
  { id: 'fh-2', team: 'ESV', rankBadge: '🏆 TORA ENDURANCE', nickname: 'ESV Phoenix', tag: 'Коммьюнити ESV • Endurance / TORA', game: 'Forza Motorsport', gamepad: 'Xbox Wireless Controller', settings: { steeringInside: 2, steeringOutside: 98, linearity: 50, accel: '5 / 95', decel: '5 / 95' }, steering: 'Стандартное', note: 'Длинные гонки на выносливость (TORA 24h) и ливреи; важна стабильность отклика стика на изношенной резине.', links: [{ t: 'YouTube', u: 'https://www.youtube.com/@ESV_Phoenix' }, { t: 'Twitch', u: 'https://www.twitch.tv/esv_phoenix' }] },
  { id: 'fh-3', team: 'K1Z', rankBadge: '⚡ TOP 0.1% RIVALS', nickname: 'K1Z Bard', tag: 'Коммьюнити K1Z • Топ-тюнер и Rivals', game: 'Forza Horizon 6', gamepad: 'Xbox Controller (Controller Overlay)', settings: { steeringInside: 0, steeringOutside: 96, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Стандартное', note: 'Рекордные заезды и дорожные тюнинги в FH6 и FH5; на видео всегда виден оверлей нажатий контроллера.', links: [{ t: 'YouTube', u: 'https://www.youtube.com/results?search_query=K1Z+Bard+Forza' }] },
  { id: 'fh-4', team: 'K1Z', rankBadge: '🏆 WR HOLDER', nickname: 'K1Z Suimin', tag: 'Коммьюнити K1Z • Чемпион Rivals', game: 'Forza Horizon 6', gamepad: 'Xbox Wireless Controller', settings: { steeringInside: 0, steeringOutside: 95, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Simulation', note: 'Один из быстрейших игроков в асфальтовых дисциплинах Horizon, ездит на стандартном хвате без помощников.', links: [{ t: 'YouTube', u: 'https://www.youtube.com/@Suimin03' }] },
  { id: 'fh-5', team: 'F1R', rankBadge: '⚡ TORA PRO', nickname: 'F1R Batcda', tag: 'Коммьюнити F1R • Соревновательные заезды', game: 'Forza Motorsport', gamepad: 'Xbox Elite / Standard Controller', settings: { steeringInside: 2, steeringOutside: 98, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Стандартное', note: 'Участник командных заездов F1R / TORA в Forza Motorsport, плотная борьба в топ-лобби.', links: [{ t: 'YouTube', u: 'https://www.youtube.com/results?search_query=F1R+Batcda+Forza' }] },
  { id: 'fh-6', team: 'ESV', rankBadge: '⚙ ESV PRESET', nickname: 'ESV Базовый сетап GT', tag: 'Коммьюнити ESV • Шаблон для асфальта', game: 'Forza Motorsport', gamepad: 'Xbox Wireless Controller', settings: { steeringInside: 3, steeringOutside: 97, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Simulation', note: 'Отправная точка для новичков: небольшая внутренняя зона гасит дрейф, остальное — по вкусу.', links: [] },
  { id: 'fh-7', team: 'ESV', rankBadge: '⚙ ESV PRESET', nickname: 'ESV Мокрый асфальт', tag: 'Коммьюнити ESV • Шаблон для дождя', game: 'Forza Motorsport', gamepad: 'GameSir G7 Pro', settings: { steeringInside: 0, steeringOutside: 100, linearity: 45, accel: '5 / 95', decel: '5 / 95' }, steering: 'Simulation', note: 'Более плавные газ и тормоз снижают пробуксовку и блокировки на мокром покрытии.', links: [] },
  { id: 'fh-8', team: 'K1Z', rankBadge: '⚙ K1Z PRESET', nickname: 'K1Z Дрифт FH6', tag: 'Коммьюнити K1Z • Шаблон для дрифта', game: 'Forza Horizon 6', gamepad: 'Xbox Wireless Controller', settings: { steeringInside: 0, steeringOutside: 100, linearity: 55, accel: '0 / 100', decel: '0 / 100' }, steering: 'Стандартное', note: 'Линейность 55 смягчает руль у центра для длинных заносов; триггеры оставлены линейными.', links: [] },
  { id: 'fh-9', team: 'K1Z', rankBadge: '⚙ K1Z PRESET', nickname: 'K1Z Бездорожье FH6', tag: 'Коммьюнити K1Z • Шаблон для кросса', game: 'Forza Horizon 6', gamepad: 'GameSir Cyclone 2', settings: { steeringInside: 2, steeringOutside: 98, linearity: 50, accel: '3 / 100', decel: '3 / 100' }, steering: 'Стандартное', note: 'Небольшая внутренняя зона на газе и тормозе помогает дозировать тягу на грунте.', links: [] },
  { id: 'fh-10', team: 'F1R', rankBadge: '⚙ F1R PRESET', nickname: 'F1R Квалификация', tag: 'Коммьюнити F1R • Шаблон для квалификации', game: 'Forza Motorsport', gamepad: 'Xbox Elite Series 2', settings: { steeringInside: 1, steeringOutside: 99, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Simulation', note: 'Короткий ход триггеров Elite 2 даёт быструю реакцию на газ и тормоз на одном круге.', links: [] },
  { id: 'fh-11', team: 'F1R', rankBadge: '⚙ F1R PRESET', nickname: 'F1R Horizon Cruise', tag: 'Коммьюнити F1R • Шаблон для FH6', game: 'Forza Horizon 6', gamepad: 'Razer Wolverine V3 Pro', settings: { steeringInside: 0, steeringOutside: 100, linearity: 50, accel: '0 / 100', decel: '0 / 100' }, steering: 'Стандартное', note: 'Минимальные зоны и прямая линейность — максимум чувствительности для быстрых дорожных заездов.', links: [] }
];

(function() {
  var KEY = 'fhUserSetups';
  var grid = document.getElementById('fh-grid');
  if (!grid) return;
  var form = document.getElementById('fh-form');
  var q = '', game = 'all';

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function safeUrl(u) { return /^https?:\/\//i.test(u) ? u : ''; }

  function axesBtn(s) {
    return s ? '<button type="button" class="fh-axes-btn" data-axes aria-expanded="false">Расширенные параметры ▾</button>' : '';
  }
  function axesPanel(r) {
    var s = r.settings; if (!s) return '';
    var a = +s.steeringInside || 0, b = s.steeringOutside == null ? 100 : +s.steeringOutside;
    var rows = [['Тип руления', r.steering || '—'], ['Steering Inside / Outside', a + ' / ' + b], ['Steering Linearity', s.linearity == null ? 50 : s.linearity],
      ['Acceleration Inside / Outside', s.accel || '0 / 100'], ['Deceleration Inside / Outside', s.decel || '0 / 100'], ['Clutch Inside / Outside', s.clutch || '—']];
    return '<div class="fh-axes" hidden>' + rows.map(function(x) {
      return '<div class="fh-cell"><span>' + x[0] + '</span><b>' + esc(x[1]) + '</b></div>'; }).join('') + '</div>';
  }

  function telemetry(r) {
    var s = r.settings; if (!s) return '';
    var a = +s.steeringInside || 0, b = s.steeringOutside == null ? 100 : +s.steeringOutside;
    var lin = s.linearity == null ? 50 : s.linearity;
    return '<div class="fh-telem"><span>ST<b>' + a + '/' + b + '</b></span><span>LIN<b>' + esc(lin) + '</b></span></div>';
  }

  function card(r) {
    var links = (r.links || (r.link ? [{ t: 'Профиль', u: r.link }] : [])).filter(function(l) { return safeUrl(l.u); });
    var icons = {
      YouTube: '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#FF0000"/><path d="M9.8 8.6v6.8l6-3.4z" fill="#fff"/></svg>',
      Twitch: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="#9146FF" d="M3.2 1L1.5 5.4v14.3h5.2V23h3.2l3.3-3.3h4.3L22.5 14V1H3.2zm17.1 12l-3.3 3.3h-5.4l-2.9 2.9v-2.9H5.6V3.1h14.7V13zM16.8 6.4h-2.1v5.8h2.1V6.4zm-5.7 0H9v5.8h2.1V6.4z"/></svg>'
    };
    var known = /^(ESV|K1Z|F1R)$/.test(r.team);
    var custom = !known && /^[A-Z0-9]{2,4}$/.test(r.team || '') && r.team !== 'CUSTOM';
    var team = known ? r.team : 'CUSTOM';
    var tagText = known || custom ? r.team : '—';
    var wm = known ? { ESV: 'ESV MOTORSPORT', K1Z: 'K1Z', F1R: 'F1R // FRIENDS 1ST' }[team] : (custom ? r.team : 'CUSTOM');
    var style = '';
    if (!known && /^#[0-9a-f]{6}$/i.test(r.teamColor || '')) {
      var c = r.teamColor, rgb = [1, 3, 5].map(function(i) { return parseInt(c.substr(i, 2), 16); }).join(', ');
      style = ' style="--tc:' + c + ';--tc-rgb:' + rgb + '"';
    }
    return '<article class="fh-card fh-team-' + team.toLowerCase() + '"' + style + '>' +
      '<span class="fh-wm" aria-hidden="true">' + esc(wm) + '</span>' +
      '<div class="fh-who"><span class="fh-lbl">Игрок</span><strong>' + esc(r.nickname) + '</strong>' +
      (r.rankBadge ? '<div class="fh-rank">' + esc(r.rankBadge) + '</div>' : '') +
      '<span class="fh-badge">' + esc(r.game) + '</span></div>' +
      '<div class="fh-team"><span class="fh-lbl">Команда</span>' +
      '<div class="fh-tag">' + esc(tagText) + '</div></div>' +
      '<div class="fh-setup"><span class="fh-lbl">Геймпад</span><div class="fh-pad">' + esc(r.gamepad) + '</div>' +
      telemetry(r) + axesBtn(r.settings) + '</div>' +
      '<div class="fh-ach"><span class="fh-lbl">Достижения</span>' +
      '<p class="fh-note">' + esc(r.note) + '</p></div>' +
      '<div class="fh-links">' + links.map(function(l) {
        return '<a class="fh-ico fh-ico-' + esc(l.t.toLowerCase()) + '" href="' + esc(l.u) + '" target="_blank" rel="noopener" title="' + esc(l.t) + '" aria-label="' + esc(l.t) + '">' + (icons[l.t] || '↗') + '</a>';
      }).join('') +
      (r.mine ? '<button type="button" class="fh-del" title="Удалить" aria-label="Удалить" data-del="' + esc(r.id) + '">✕</button>' : '') + '</div>' +
      axesPanel(r) + '</article>';
  }

  function render() {
    var all = load().map(function(r) { r.mine = true; return r; }).reverse().concat(FORZA_HALL);
    var list = all.filter(function(r) {
      if (game !== 'all' && r.game !== game && r.game !== 'Обе') return false;
      return !q || (r.nickname + ' ' + r.gamepad).toLowerCase().indexOf(q) !== -1;
    });
    grid.innerHTML = (list.length ? list.map(card).join('') : '<p class="fh-empty">Ничего не найдено</p>') +
      '<button type="button" class="fh-slot" data-add-slot aria-haspopup="dialog"><span class="fh-slot-plus" aria-hidden="true">+</span> Добавить свой сетап</button>';
  }

  document.getElementById('fh-search').addEventListener('input', function() { q = this.value.trim().toLowerCase(); render(); });
  document.getElementById('fh-filters').addEventListener('click', function(e) {
    var b = e.target.closest('[data-g]'); if (!b) return;
    game = b.getAttribute('data-g');
    [].forEach.call(this.children, function(x) { x.classList.toggle('active', x === b); });
    render();
  });
  form.addEventListener('input', function(e) {
    var t = e.target, w = t.parentNode;
    if (!w.classList.contains('fh-sync')) return;
    var o = w.querySelector(t.type === 'range' ? 'input[type=number]' : 'input[type=range]');
    if (o) o.value = t.value;
  });
  form.addEventListener('reset', function() {
    setTimeout(function() { [].forEach.call(form.querySelectorAll('.fh-sync input[type=number]'), function(n) { n.nextElementSibling.value = n.value; }); }, 0);
  });
  document.getElementById('fh-more').addEventListener('click', function() {
    var x = document.getElementById('fh-extra'); x.hidden = !x.hidden;
    this.setAttribute('aria-expanded', String(!x.hidden));
  });
  var TEAM_COLORS = { ESV: '#DC2626', K1Z: '#71717A', F1R: '#1B5E4B' };
  var colorTouched = false;
  form.elements.teamColor.addEventListener('input', function() { colorTouched = true; });
  form.elements.team.addEventListener('input', function() {
    var t = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    this.value = t;
    if (TEAM_COLORS[t]) { form.elements.teamColor.value = TEAM_COLORS[t]; colorTouched = false; }
  });
  form.addEventListener('reset', function() { colorTouched = false; form.classList.add('fh-simple'); });
  document.getElementById('fh-mode').addEventListener('change', function() { form.classList.toggle('fh-simple', this.checked); });
  // Выдвижная панель с формой: открывается кнопкой в шапке секции
  var backdrop = document.getElementById('fh-backdrop');
  var toggleBtn = document.getElementById('fh-toggle');
  function setDrawer(open) {
    form.hidden = !open;
    if (backdrop) backdrop.hidden = !open;
    toggleBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) { var f = form.elements.nickname; if (f) f.focus(); } else { toggleBtn.focus(); }
  }
  toggleBtn.addEventListener('click', function() { setDrawer(form.hidden); });
  document.getElementById('fh-close').addEventListener('click', function() { setDrawer(false); });
  if (backdrop) backdrop.addEventListener('click', function() { setDrawer(false); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && !form.hidden) setDrawer(false); });
  window.addEventListener('hashchange', function() { if (!form.hidden) setDrawer(false); });

  function vals() {
    var o = {}; ['nickname', 'game', 'gamepad', 'steering', 'note', 'link'].forEach(function(k) { o[k] = form.elements[k].value.trim(); });
    var n = function(k, d) { var v = parseFloat(form.elements[k].value); return isNaN(v) ? d : v; };
    var p = function(i, io) { return n(i, 0) + ' / ' + n(io, 100); };
    o.settings = { steeringInside: n('stIn', 0), steeringOutside: n('stOut', 95), linearity: n('lin', 50),
      accel: p('accIn', 'accOut'), decel: p('decIn', 'decOut'), clutch: p('clIn', 'clOut') };
    return o;
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var o = vals(); o.id = 'u' + Date.now(); o.tag = 'Сообщество';
    var tg = form.elements.team.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    o.team = tg.length >= 2 ? tg : 'CUSTOM'; o.teamColor = form.elements.teamColor.value;
    o.rankBadge = '⚙ ' + (tg.length >= 2 ? tg + ' SETUP' : 'CUSTOM SETUP');
    var a = load(); a.push(o); save(a);
    form.reset(); setDrawer(false); render();
  });
  document.getElementById('fh-issue').addEventListener('click', function() {
    if (!form.reportValidity()) return;
    var o = vals();
    var body = '**Никнейм:** ' + o.nickname + '\n**Дисциплина:** ' + o.game + '\n**Геймпад:** ' + o.gamepad +
      '\n**Advanced Controls:** Steering ' + o.settings.steeringInside + '/' + o.settings.steeringOutside + ', Linearity ' + o.settings.linearity + ', Accel ' + o.settings.accel + ', Decel ' + o.settings.decel + ', Clutch ' + o.settings.clutch +'\n**Тип управления:** ' + o.steering + '\n**Комментарий:** ' + o.note + '\n**Ссылка:** ' + o.link;
    window.open('https://github.com/notdual1ty/gamepad-hub/issues/new?title=' + encodeURIComponent('Forza Hall: ' + o.nickname) +
      '&body=' + encodeURIComponent(body), '_blank', 'noopener');
  });
  grid.addEventListener('click', function(e) {
    var t = e.target;
    if (t.closest && t.closest('[data-add-slot]')) { setDrawer(true); return; }
    if (t.hasAttribute && t.hasAttribute('data-axes')) {
      var c = t.closest('.fh-card');
      var tb = c.querySelector('.fh-axes'); tb.hidden = !tb.hidden;
      t.setAttribute('aria-expanded', String(!tb.hidden)); t.textContent = tb.hidden ? 'Расширенные параметры ▾' : 'Расширенные параметры ▴'; return;
    }
    var id = t.getAttribute && t.getAttribute('data-del'); if (!id) return;
    save(load().filter(function(r) { return r.id !== id; })); render();
  });
  render();
})();

// ===== ИЗОБРАЖЕНИЯ-СЛОТЫ (NFS ProStreet и др.) =====
// Укажите путь к кадру, напр. 'images/prostreet-forza.jpg'. Пустая строка — слот остаётся градиентом.
// teamreact.jpg теперь общий фон сайта (style.css, body). Для виджета Forza Hall подставьте другой кадр в forzaHall.
var SITE_IMAGES = { forzaHall: '', racing: '' };

// Виджет «Быстрые ориентиры по задержке»: реальные диапазоны из gamepadla-data.json
// (фолбэк — GAMEPADS[].gamepadla, если fetch недоступен, например file://)
(function () {
  var box = document.getElementById('wg-models');
  if (!box) return;
  var note = document.getElementById('wg-note');
  var rowsBox = document.querySelector('.wg-rows');
  var KEYS = [
    { k: 'cableBtn', label: 'USB' },
    { k: 'dongleBtn', label: '2.4 ГГц' },
    { k: 'btBtn', label: 'Bluetooth' }
  ];
  var models = [], updated = null, fromJson = false;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(v) { return typeof v === 'number' && isFinite(v) ? v : null; }
  function f1(v) { return v.toFixed(1); }
  function fmtDate(iso) {
    var d = iso ? new Date(iso) : null;
    if (!d || isNaN(d.getTime())) return '—';
    function p(n) { return n < 10 ? '0' + n : '' + n; }
    return p(d.getDate()) + '.' + p(d.getMonth() + 1) + '.' + d.getFullYear();
  }

  function fromGamepads() {
    var out = [];
    if (typeof GAMEPADS === 'undefined') return out;
    GAMEPADS.forEach(function (g) {
      var l = g.gamepadla;
      if (!l) return;
      out.push({ id: g.id, name: g.name, pollingRate: num(l.pollingRate),
        cableBtn: num(l.cableBtn), dongleBtn: num(l.dongleBtn), btBtn: num(l.btBtn) });
    });
    return out;
  }

  function fromJsonData(json) {
    var out = [];
    if (!json || !json.models) return out;
    for (var id in json.models) {
      if (!json.models.hasOwnProperty(id)) continue;
      var m = json.models[id];
      out.push({ id: id, name: m.name || id, pollingRate: num(m.pollingRate),
        cableBtn: num(m.cableBtn), dongleBtn: num(m.dongleBtn), btBtn: num(m.btBtn) });
    }
    return out;
  }

  function stats(k) {
    var vals = [];
    models.forEach(function (m) { if (m[k] !== null) vals.push(m[k]); });
    if (!vals.length) return null;
    var sum = 0, i;
    for (i = 0; i < vals.length; i++) sum += vals[i];
    return { min: Math.min.apply(null, vals), max: Math.max.apply(null, vals), avg: sum / vals.length };
  }

  function leader() {
    var best = null;
    models.forEach(function (m) {
      KEYS.forEach(function (c) {
        if (m[c.k] !== null && (!best || m[c.k] < best.ms)) best = { m: m, ms: m[c.k], label: c.label };
      });
    });
    return best;
  }

  function leaderLine(L) {
    if (!L) return '<span>Нет данных</span>';
    return '<span>' + esc(L.m.name) + ' <em>' + L.label + '</em></span><b>' + f1(L.ms) + ' мс' +
      (L.m.pollingRate ? ' · ' + L.m.pollingRate + ' Гц' : '') + '</b>';
  }

  function modelLine(m) {
    var parts = KEYS.map(function (c) {
      return c.label + ' <b>' + (m[c.k] === null ? '—' : f1(m[c.k]) + ' мс') + '</b>';
    });
    return parts.join(' · ') + (m.pollingRate ? ' · <b>' + m.pollingRate + ' Гц</b>' : '');
  }

  function renderRanges() {
    if (!rowsBox) return;
    var all = KEYS.map(function (c) { return stats(c.k); });
    var top = 0;
    all.forEach(function (s) { if (s && s.max > top) top = s.max; });
    KEYS.forEach(function (c, i) {
      var li = rowsBox.querySelector('li[data-k="' + c.k + '"]');
      if (!li) return;
      var b = li.getElementsByTagName('b')[0], bar = li.getElementsByTagName('i')[0], s = all[i];
      if (!s) { b.textContent = '—'; if (bar) bar.style.width = '0'; return; }
      b.textContent = s.min === s.max ? f1(s.min) + ' мс' : f1(s.min) + '–' + f1(s.max) + ' мс';
      b.title = 'Среднее: ' + f1(s.avg) + ' мс';
      if (bar) bar.style.width = Math.max(4, Math.round(s.avg / top * 100)) + '%';
    });
  }

  function renderNote() {
    if (!note) return;
    note.innerHTML = 'Диапазоны по базе Gamepadla (' + models.length + ' моделей) · Обновлено: ' +
      '<b>' + (fromJson ? fmtDate(updated) : 'локальные данные') + '</b>';
  }

  function renderPicker() {
    var L = leader();
    var prev = document.getElementById('wg-pick');
    var cur = prev ? prev.value : '';
    var opts = '<option value="">Лидер по базе</option>' + models.map(function (m) {
      return '<option value="' + esc(m.id) + '">' + esc(m.name) + '</option>';
    }).join('');
    box.innerHTML = '<li class="wg-pick-row"><select id="wg-pick" class="wg-pick" aria-label="Модель геймпада">' + opts + '</select></li>' +
      '<li class="wg-leader" id="wg-leader"></li><li class="wg-detail" id="wg-detail"></li>';
    var sel = document.getElementById('wg-pick');
    function show() {
      var lead = document.getElementById('wg-leader'), det = document.getElementById('wg-detail');
      var m = null, i;
      for (i = 0; i < models.length; i++) if (models[i].id === sel.value) m = models[i];
      if (m) {
        lead.innerHTML = '<span>' + esc(m.name) + '</span>';
        det.innerHTML = modelLine(m);
      } else {
        lead.innerHTML = leaderLine(L);
        det.innerHTML = '';
      }
    }
    sel.value = cur;
    if (sel.value !== cur) sel.value = '';
    sel.addEventListener('change', show);
    show();
  }

  function renderAll() { renderRanges(); renderPicker(); renderNote(); }

  models = fromGamepads();
  renderAll();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'gamepadla-data.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
      try {
        var json = JSON.parse(xhr.responseText), list = fromJsonData(json);
        if (list.length) { models = list; updated = json.updated || null; fromJson = true; renderAll(); }
      } catch (e) { /* остаёмся на фолбэке */ }
    }
  };
  try { xhr.send(); } catch (e) { /* file:// — фолбэк GAMEPADS */ }
})();
(function () {
  var els = document.querySelectorAll('[data-img]');
  for (var i = 0; i < els.length; i++) {
    var src = SITE_IMAGES[els[i].getAttribute('data-img')];
    if (src) els[i].style.setProperty('--img', 'url("' + src + '")');
  }
})();


// Превью сетапов в виджете Forza Hall на главной
(function () {
  var box = document.getElementById('wg-setups');
  if (!box || typeof FORZA_HALL === 'undefined') return;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var picks = FORZA_HALL.slice(0, 5);
  box.innerHTML = picks.map(function(r, i) {
    var team = /^(ESV|K1Z|F1R)$/.test(r.team) ? r.team.toLowerCase() : 'custom';
    return '<li><a href="#forza"><span class="ws-pos">' + (i < 9 ? '0' : '') + (i + 1) + '</span>' +
      '<span class="ws-team ws-team-' + team + '">' + esc(r.team) + '</span><span class="ws-name">' + esc(r.nickname) + '</span>' +
      '<span class="ws-val">' + esc(r.gamepad) + '</span></a></li>';
  }).join('');
})();
