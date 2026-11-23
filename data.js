// ===== ДАННЫЕ О ГЕЙМПАДАХ =====
const GAMEPADS = [
  {
    id:"apex-5", name:"Apex 5", price:2490, purchaseDate:"марте 2026", usageMonths:8,
    genres:["shooter","arcade"], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:4.8, wirelessLatencyMs:6.5, pollingRateHz:250, sourceLabel:"Gamepadla",
    description:"Беспроводной геймпад с USB-C и Bluetooth 5.0. Работает в Windows 11 без родного софта как XInput-устройство. Вибрация есть, гироскоп отсутствует. Заряда хватает на 18 часов.",
    verdict:"Хороший вариант до 3000 ₽, если не нужен гироскоп и точные стики для шутеров.",
    image:"apex5.webp", fullReview:"apex5.html",
    specLine: "X-INPUT",
    specs: {
      sticks: "Аналоговые, точные, дрейфа не замечено",
      triggers: "Механические, линейные, отзывчивые",
      connection: "USB-C (2.4ГГц) + BT 5.0, отклик <5мс",
      battery: "18 часов на одной зарядке",
      weight: "210 г"
    },
    pros: ["Работает без драйверов на Windows", "Удобная форма для шутеров", "Хорошая цена", "Надежный тач", "Вибрация функционирует везде"],
    cons: ["Нет гироскопа", "Нет Hall Effect стиков", "Bluetooth может глючить на старых ПК", "Только 2 обновления в год"],
    fullVerdict: "После 8 месяцев тестирования в Apex Legends, CS2 и Fortnite — Apex 5 показал себя как надежный выбор для бюджетников. Не лучший, но очень стабильный. Рекомендуем тем, кто не готов тратить на Xbox, но хочет работающий геймпад без танцев с бубном."
  },
  {
    id:"xbox-wireless", name:"Xbox Wireless Controller", price:5990, purchaseDate:"январе 2026", usageMonths:10,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:2.1, wirelessLatencyMs:4.2, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Официальный геймпад Microsoft. Подключение по USB-C, Bluetooth или фирменному dongle. Работает из коробки в Windows, Steam Deck, Android. Зарядка от 2xAA батареек (около 30 часов) или от аккумуляторного блока.",
    verdict:"Эталон совместимости. Переплата за бренд, но работает везде без настройки.",
    image:"xbox-controller.jpg", fullReview:"apex5.html",
    specLine: "СТАНДАРТ ПК",
    specs: {
      sticks: "Аналоговые, стабильные, минимальный дрейф",
      triggers: "Механические, с виброотдачей, отличная точность",
      connection: "2.4ГГц, Bluetooth, USB-C. Отклик <4мс",
      battery: "25–30 часов (батарейки AA) или 15 часов (аккумулятор)",
      weight: "280 г с батарейками"
    },
    pros: ["Работает везде: Windows, Steam Deck, Android, Xbox", "Отличное качество сборки", "Долгая автономность", "Microsoft официально поддерживает", "Хорошие триггеры"],
    cons: ["Дорогой относительно конкурентов", "Батарейки AA (экологично, но неудобно)", "Нет гироскопа", "Нет тач-панели", "Немного тяжелый"],
    fullVerdict: "10 месяцев на Xbox Series X, Windows 11, Steam Deck — Xbox Controller остается эталоном. Работает везде. Это не самый инновационный геймпад, но для своей цены и совместимости это стоит денег. Рекомендуем всем, кто ценит надежность над экспериментами."
  },
  {
    id:"dualsense", name:"Sony DualSense", price:6490, purchaseDate:"феврале 2026", usageMonths:9,
    genres:["arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:false,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:3.5, wirelessLatencyMs:9.8, pollingRateHz:250, sourceLabel:"Gamepadla",
    description:"Геймпад от PlayStation 5. Тактильная отдача и адаптивные триггеры работают только в играх Sony и некоторых портах (Death Stranding, Cyberpunk). В остальных играх — обычный геймпад. Bluetooth-подключение к Windows нестабильное, лучше по USB.",
    verdict:"Брать только если играете в эксклюзивы Sony. Для всего остального — Xbox Controller удобнее.",
    image:"dualsense .jpg", fullReview:"apex5.html",
    specLine: "ГИРОСКОП",
    specs: {
      sticks: "Емкостные, с haptic-отдачей, быстрый дрейф на копиях",
      triggers: "Адаптивные (работают в PS5, иногда в портах)",
      connection: "Bluetooth / USB-C. На Windows: нестабильно, 10–50мс",
      battery: "12 часов на PS5, 8–10 на Windows",
      weight: "190 г"
    },
    pros: ["Инновационные адаптивные триггеры (в играх Sony)", "Гироскоп встроен", "Легкий и удобный", "Отзывчивый на PS5", "Классный тактильный фидбэк"],
    cons: ["На Windows работает так себе", "Быстрый дрейф стиков на подделках", "Дорогой", "Ограниченная совместимость", "Bluetooth часто рассинхронизируется", "Батарея заканчивается быстро"],
    fullVerdict: "После 9 месяцев тестирования на Windows и PlayStation 5: DualSense — отличный геймпад, но только для экосистемы Sony. На Windows это дорогой декоративный предмет. Если вы PS5 фанат — да, берите. Если нет — ищите Xbox или альтернативу."
  },
  {
    id:"gamesir-g7-pro", name:"GameSir G7 Pro", price:7490, purchaseDate:"апреле 2026", usageMonths:7,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:true,
    isWireless:false, isCrossPlatform:true,
    wiredLatencyMs:1.9, wirelessLatencyMs:null, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Проводной геймпад в форме Xbox со стиками на эффекте Холла (TMR в новых ревизиях), сменными модулями и опросом 1000 Гц. Работает на ПК, Xbox и Switch как XInput без драйверов.",
    verdict:"Лучший проводной вариант для гонок и шутеров: точный центр, минимальная задержка, без дрейфа.",
    image:"", fullReview:"apex5.html",
    specLine: "HALL / 1000 ГЦ",
    specs: {
      sticks: "Холл/TMR, чистый центр, дрейфа нет",
      triggers: "Холл, переключатель длинного/короткого хода",
      connection: "USB-C проводной, опрос 1000 Гц, отклик ~2 мс",
      battery: "Не требуется (проводной)",
      weight: "290 г"
    },
    pros: ["Датчики Холла — дрейф исключён", "Опрос 1000 Гц и задержка ~2 мс", "Точные триггеры с регулировкой хода", "Работает без драйверов", "Съёмный кабель и сменные шляпки"],
    cons: ["Только провод", "Нет гироскопа", "Тяжелее Xbox Controller", "Фирменный софт GameSir — только Windows"],
    fullVerdict: "7 месяцев в Forza, CS2 и Street Fighter 6: G7 Pro даёт именно то, чего не хватает стандартному Xbox-геймпаду, — стабильный центр стиков и самую низкую задержку в каталоге. Если беспроводной режим не нужен, это лучший выбор за свои деньги."
  },
  {
    id:"xbox-elite-2", name:"Xbox Elite Series 2", price:14990, purchaseDate:"марте 2026", usageMonths:8,
    genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:2.2, wirelessLatencyMs:4.5, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Премиальный геймпад Microsoft: сменные стики и подпружиненный D-pad, задние лепестки, регулировка натяжения стиков и короткий ход триггеров. Встроенный аккумулятор на 40 часов.",
    verdict:"Дорого, но самая продуманная эргономика. Берите, если играете много и дольше трёх часов подряд.",
    image:"", fullReview:"apex5.html",
    specLine: "PRO / ЛЕПЕСТКИ",
    specs: {
      sticks: "Потенциометры, регулируемое натяжение, сменные шляпки",
      triggers: "Короткий ход (3 режима), металл",
      connection: "Bluetooth, USB-C, отклик ~4.5 мс",
      battery: "До 40 часов, зарядная док-станция в комплекте",
      weight: "345 г"
    },
    pros: ["Задние лепестки и гибкая раскладка", "Короткий ход триггеров для шутеров", "Отличная сборка и автономность", "Профили на 3 раскладки в памяти"],
    cons: ["Цена выше 14 000 ₽", "Потенциометры могут дрейфовать после года", "Покрытие резины со временем стирается", "Нет гироскопа"],
    fullVerdict: "8 месяцев ежедневного использования: Elite 2 — самый комфортный геймпад для долгих сессий, но потенциометрические стики за такую цену — спорный выбор. Для гонок и шутеров он идеален, для бюджета — нет."
  },
  {
    id:"gamesir-cyclone-2", name:"GameSir Cyclone 2", price:5990, purchaseDate:"мае 2026", usageMonths:6,
    genres:["shooter","arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:true,
    isWireless:true, isCrossPlatform:true,
    wiredLatencyMs:2.0, wirelessLatencyMs:4.0, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Беспроводной геймпад с донглом 2.4 ГГц, датчиками Холла, гироскопом и подсветкой. Работает на ПК, Android, Switch и Steam Deck; зарядная подставка в комплекте.",
    verdict:"Лучший за 6 000 ₽: Холл, гироскоп и опрос 1000 Гц по 2.4 ГГц в одном корпусе.",
    image:"", fullReview:"apex5.html",
    specLine: "ГИРО + ХОЛЛ",
    specs: {
      sticks: "Холл, стабильный центр",
      triggers: "Холл, линейные, с переключателем хода",
      connection: "2.4 ГГц донгл, Bluetooth, USB-C; отклик ~4 мс",
      battery: "20 часов, зарядка через подставку",
      weight: "250 г"
    },
    pros: ["Гироскоп и датчики Холла", "1000 Гц по 2.4 ГГц", "Подставка для зарядки в комплекте", "Совместим с Switch и Steam Deck"],
    cons: ["Нет официального сертификата Microsoft", "Подсветка расходует заряд", "Слабая вибрация по сравнению с Xbox"],
    fullVerdict: "6 месяцев с Steam Input и гиро-прицеливанием: Cyclone 2 — редкий случай, когда цена и набор функций действительно совпадают. Единственный компромисс — нет сертификата и софт только для Windows."
  },
  {
    id:"razer-wolverine-v3-pro", name:"Razer Wolverine V3 Pro", price:17990, purchaseDate:"июне 2026", usageMonths:5,
    genres:["shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:true,
    isWireless:true, isCrossPlatform:false,
    wiredLatencyMs:1.5, wirelessLatencyMs:2.0, pollingRateHz:1000, sourceLabel:"Gamepadla",
    description:"Киберспортивный геймпад Razer: беспроводной донгл HyperSpeed 1000 Гц, механо-тактильные кнопки, Холл-стики, шесть дополнительных кнопок и сменные модули.",
    verdict:"Самая низкая задержка по радио в каталоге, но цена оправдана только для соревновательных игр.",
    image:"", fullReview:"apex5.html",
    specLine: "ESPORTS / 1000 ГЦ",
    specs: {
      sticks: "Холл, сменные шляпки и разная высота",
      triggers: "Холл, короткий ход, механо-тактильные",
      connection: "HyperSpeed 2.4 ГГц, USB-C; отклик ~2 мс",
      battery: "Около 14 часов",
      weight: "320 г"
    },
    pros: ["Задержка по радио почти как по проводу", "Шесть доп. кнопок и профили", "Механо-тактильные кнопки", "Холл-стики"],
    cons: ["Очень высокая цена", "Работает только через донгл на ПК/Xbox", "Нет гироскопа", "Автономность ниже Elite 2"],
    fullVerdict: "5 месяцев в Apex Legends и файтингах: Wolverine V3 Pro даёт задержку уровня проводного геймпада без провода, но по соотношению цены и пользы уступает G7 Pro. Подойдёт тем, кому важна каждая миллисекунда."
  }
];

// ===== МОДЕЛИ НА ТЕСТИРОВАНИИ =====
const IN_TESTING = [
  { name: "Flydigi Vader 4 Pro", month: "2-й месяц", progress: 67 },
  { name: "8BitDo Ultimate Bluetooth", month: "1-й месяц", progress: 33 },
  { name: "Turtle Beach React-R", month: "3-й месяц", progress: 100 }
];

// ===== ЗАДЕРЖКИ (стиль Gamepadla) =====
// Модели из каталога берутся из GAMEPADS, остальные (на тесте) — здесь. null = нет замера.
// ВАЖНО: значения ориентировочные — перед публикацией сверить с gamepadla.com.
var LATENCY_EXTRA = [
  { name: "Flydigi Vader 4 Pro", wiredLatencyMs: 1.8, wirelessLatencyMs: 4.2, pollingRateHz: 1000, sourceLabel: "Gamepadla" },
  { name: "8BitDo Ultimate Bluetooth", wiredLatencyMs: 2.4, wirelessLatencyMs: 8.0, pollingRateHz: 125, sourceLabel: "Gamepadla" },
  { name: "Turtle Beach React-R", wiredLatencyMs: 4.0, wirelessLatencyMs: null, pollingRateHz: 125, sourceLabel: "Gamepadla" }
];

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
  var rows = GAMEPADS.filter(function(g) { return g.price > 0 && hasLatency(g); }).concat(LATENCY_EXTRA);
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
      }).join('') + '</tbody></table><p class="lat-src">Клик по заголовку — сортировка. Данные в стиле Gamepadla.</p>';
  }
  box.addEventListener('click', function(e) {
    var h = e.target.closest ? e.target.closest('th[data-k]') : null;
    if (!h) return;
    var k = h.getAttribute('data-k');
    dir = (k === key) ? -dir : 1; key = k; draw();
  });
  draw();
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

  var inner = '<div class="card-media">' + media + '</div>'
    + '<div class="card-info" data-index="' + specIndex + '">'
    + '<h3>' + g.name + '</h3>'
    + '<p class="meta">' + metaLine + '</p>'
    + '<p class="desc">' + g.description + '</p>'
    + (hasLatency(g) ? '<p class="latency-line">' + latencyLine(g) + '</p>' : '')
    + '<div class="card-footer">'
    + '<p class="verdict">' + g.verdict + '</p>'
    + (hasReview ? '<span class="review-link">ПОЛНЫЙ ОБЗОР →</span>' : '')
    + '</div>'
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
      return '<a class="kb-card" href="#guides" onclick="return openGuideModal(event, \'' + g.id + '\')">' +
        '<span class="kb-tag">' + g.tag + ' · ' + g.time + '</span>' +
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
          '<div class="modal-review">' +
            '<h3>Плюсы и минусы</h3>' +
            '<div class="modal-pros-cons">' + prosHtml + consHtml + '</div>' +
          '</div>' +
          '<div class="modal-verdict">' +
            '<h4>Итог после ' + gamepad.usageMonths + ' ' + wordForCount(gamepad.usageMonths, 'месяц', 'месяца', 'месяцев') + ' тестов</h4>' +
            '<p>' + gamepad.fullVerdict + '</p>' +
          '</div>' +
          '<a href="reviews.html#gamepad-tester" class="modal-tester-btn" onclick="return goToTester(event)">Проверить геймпад в тестере →</a>' +
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
  var tester = document.getElementById('gamepad-tester');
  if (!tester) return true; // на другой странице — обычный переход по ссылке
  e.preventDefault();
  closeGamepadModal();
  tester.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  function card(r) {
    var links = (r.links || (r.link ? [{ t: 'Профиль', u: r.link }] : [])).filter(function(l) { return safeUrl(l.u); });
    var icons = {
      YouTube: '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#FF0000"/><path d="M9.8 8.6v6.8l6-3.4z" fill="#fff"/></svg>',
      Twitch: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="#9146FF" d="M3.2 1L1.5 5.4v14.3h5.2V23h3.2l3.3-3.3h4.3L22.5 14V1H3.2zm17.1 12l-3.3 3.3h-5.4l-2.9 2.9v-2.9H5.6V3.1h14.7V13zM16.8 6.4h-2.1v5.8h2.1V6.4zm-5.7 0H9v5.8h2.1V6.4z"/></svg>'
    };
    var team = /^(ESV|K1Z|F1R)$/.test(r.team) ? r.team : 'CUSTOM';
    var wm = { ESV: 'ESV MOTORSPORT', K1Z: 'K1Z', F1R: 'F1R // FRIENDS 1ST', CUSTOM: 'CUSTOM' }[team];
    return '<article class="fh-card fh-team-' + team.toLowerCase() + '">' +
      '<span class="fh-wm" aria-hidden="true">' + wm + '</span>' +
      '<div class="fh-who"><span class="fh-lbl">Игрок</span><strong>' + esc(r.nickname) + '</strong>' +
      (r.rankBadge ? '<div class="fh-rank">' + esc(r.rankBadge) + '</div>' : '') +
      '<span class="fh-badge">' + esc(r.game) + '</span></div>' +
      '<div class="fh-team"><span class="fh-lbl">Команда</span>' +
      '<div class="fh-tag">' + esc(team === 'CUSTOM' ? '—' : team) + '</div></div>' +
      '<div class="fh-setup"><span class="fh-lbl">Геймпад</span><div class="fh-pad">' + esc(r.gamepad) + '</div>' +
      axesBtn(r.settings) + '</div>' +
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
    grid.innerHTML = list.length ? list.map(card).join('') : '<p class="fh-empty">Ничего не найдено</p>';
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
  document.getElementById('fh-toggle').addEventListener('click', function() { form.hidden = !form.hidden; });

  function vals() {
    var o = {}; ['nickname', 'game', 'gamepad', 'steering', 'note', 'link'].forEach(function(k) { o[k] = form.elements[k].value.trim(); });
    var n = function(k, d) { var v = parseFloat(form.elements[k].value); return isNaN(v) ? d : v; };
    var p = function(i, io) { return n(i, 0) + ' / ' + n(io, 100); };
    o.settings = { steeringInside: n('stIn', 0), steeringOutside: n('stOut', 96), linearity: n('lin', 50),
      accel: p('accIn', 'accOut'), decel: p('decIn', 'decOut'), clutch: p('clIn', 'clOut') };
    return o;
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var o = vals(); o.id = 'u' + Date.now(); o.tag = 'Сообщество'; o.team = 'CUSTOM'; o.rankBadge = '⚙ CUSTOM SETUP';
    var a = load(); a.push(o); save(a);
    form.reset(); form.hidden = true; render();
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

// Конкретные замеры моделей для виджета «Быстрые ориентиры по задержке»
(function () {
  var box = document.getElementById('wg-models');
  if (!box || typeof GAMEPADS === 'undefined') return;
  var picks = [
    { id: 'gamesir-g7-pro', mode: 'wired' },
    { id: 'razer-wolverine-v3-pro', mode: 'wireless' },
    { id: 'xbox-wireless', mode: 'wireless' }
  ];
  var html = '';
  picks.forEach(function (p) {
    var g = GAMEPADS.filter(function (x) { return x.id === p.id; })[0];
    if (!g) return;
    var ms = p.mode === 'wired' ? g.wiredLatencyMs : g.wirelessLatencyMs;
    if (ms == null) return;
    html += '<li><span>' + g.name + ' <em>' + (p.mode === 'wired' ? 'USB' : '2.4 ГГц/BT') + '</em></span>' +
      '<b>' + ms.toFixed(1) + ' мс · ' + g.pollingRateHz + ' Гц</b></li>';
  });
  box.innerHTML = html;
})();
(function () {
  var els = document.querySelectorAll('[data-img]');
  for (var i = 0; i < els.length; i++) {
    var src = SITE_IMAGES[els[i].getAttribute('data-img')];
    if (src) els[i].style.setProperty('--img', 'url("' + src + '")');
  }
})();
