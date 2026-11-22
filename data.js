// ===== ДАННЫЕ О ГЕЙМПАДАХ =====
const GAMEPADS = [
  { id:"apex-5", name:"Apex 5", price:2490, purchaseDate:"март 2026", usageMonths:8, genres:["shooter","arcade"], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:true, isCrossPlatform:false, description:"Беспроводной геймпад с USB-C и Bluetooth 5.0. Работает в Windows 11 без родного софта как XInput-устройство. Вибрация есть, гироскоп отсутствует. Заряда хватает на 18 часов.", verdict:"Хороший вариант до 3000 ₽, если не нужен гироскоп и точные стики для шутеров.", image:"images/apex5.jpg", fullReview:"apex5.html" },
  { id:"xbox-wireless", name:"Xbox Wireless Controller", price:5990, purchaseDate:"январь 2026", usageMonths:10, genres:["racing","shooter","fighting","arcade"], isMicrosoftCertified:true, hasGyro:false, hasHallEffect:false, isWireless:true, isCrossPlatform:true, description:"Официальный геймпад Microsoft. Подключение по USB-C, Bluetooth или фирменному dongle. Работает из коробки в Windows, Steam Deck, Android. Зарядка от 2xAA батареек (около 30 часов) или от аккумуляторного блока.", verdict:"Эталон совместимости. Переплата за бренд, но работает везде без настройки.", image:"images/xbox-controller.jpg", fullReview:"xbox-wireless.html" },
  { id:"dualsense", name:"Sony DualSense", price:6490, purchaseDate:"февраль 2026", usageMonths:9, genres:["arcade"], isMicrosoftCertified:false, hasGyro:true, hasHallEffect:false, isWireless:true, isCrossPlatform:false, description:"Геймпад от PlayStation 5. Тактильная отдача и адаптивные триггеры работают только в играх Sony и некоторых портах (Death Stranding, Cyberpunk). В остальных играх — обычный геймпад. Bluetooth-подключение к Windows нестабильное, лучше по USB.", verdict:"Брать только если играете в эксклюзивы Sony. Для всего остального — Xbox Controller удобнее.", image:"images/dualsense.jpg", fullReview:"dualsense.html" },
  { id:"placeholder-1", name:"Геймпад #4", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-2", name:"Геймпад #5", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-3", name:"Геймпад #6", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-4", name:"Геймпад #7", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-5", name:"Геймпад #8", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-6", name:"Геймпад #9", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" },
  { id:"placeholder-7", name:"Геймпад #10", price:0, purchaseDate:"—", usageMonths:0, genres:[], isMicrosoftCertified:false, hasGyro:false, hasHallEffect:false, isWireless:false, isCrossPlatform:false, description:"Обзор готовится. Данные будут добавлены после тестирования.", verdict:"Скоро", image:"", fullReview:"" }
];

// ===== КАТЕГОРИИ =====
const CATEGORIES = {
  racing:    { label:"Гонки",                       filter:function(g){ return g.genres && g.genres.indexOf("racing")!==-1; } },
  shooter:   { label:"Шутеры",                      filter:function(g){ return g.genres && g.genres.indexOf("shooter")!==-1; } },
  fighting:  { label:"Файтинги",                    filter:function(g){ return g.genres && g.genres.indexOf("fighting")!==-1; } },
  arcade:    { label:"Аркадные игры",               filter:function(g){ return g.genres && g.genres.indexOf("arcade")!==-1; } },
  certified: { label:"Сертифицированные Microsoft", filter:function(g){ return g.isMicrosoftCertified===true; } }
};

// ===== SVG-PLACEHOLDER =====
var PLACEHOLDER_SVG = '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M6 9h12a4 4 0 014 4l-1 4a2 2 0 01-3.5 1L16 16H8l-1.5 2A2 2 0 013 17l-1-4a4 4 0 014-4z"/><circle cx="8.5" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/><path d="M7 14.5h3M7 13v3"/></svg>';

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
  var hasImage = !isPlaceholder && g.image;
  var num = String(index + 1).padStart(2, '0');

  var media = '<div class="card-media">';
  if (hasImage) {
    media += '<img src="' + g.image + '" alt="' + g.name + '" onerror="this.classList.add(\'broken\')">';
  }
  media += '<div class="placeholder-img">' + PLACEHOLDER_SVG + '</div></div>';

  var metaLine = isPlaceholder
    ? 'Данные не заполнены'
    : 'Куплен в ' + g.purchaseDate + ' · ' + g.price.toLocaleString('ru-RU') + ' ₽ · ' + g.usageMonths + ' мес.';

  var badge = '';
  if (!isPlaceholder && g.genres && g.genres.length > 0) {
    var firstGenre = g.genres[0];
    var genreLabels = {racing:'GONKI', shooter:'SHOOTER', fighting:'FIGHTING', arcade:'ARCADE'};
    if (genreLabels[firstGenre]) {
      badge = '<span class="card-badge">' + genreLabels[firstGenre] + '</span>';
    }
  }

  var inner = '<span class="card-number">' + num + '</span>'
    + badge
    + media
    + '<h3>' + g.name + '</h3>'
    + '<p class="meta">' + metaLine + '</p>'
    + '<p class="desc">' + g.description + '</p>'
    + '<p class="verdict">' + g.verdict + '</p>'
    + (hasReview ? '<span class="review-link">Полный обзор →</span>' : '');

  if (hasReview) {
    return '<a class="gamepad-card" href="' + g.fullReview + '">' + inner + '</a>';
  } else {
    return '<div class="gamepad-card placeholder">' + inner + '</div>';
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
function init() {
  var params = new URLSearchParams(window.location.search);
  var q = params.get('q') || '';
  var cat = params.get('cat') || '';

  var filtered = filterGamepads({ q: q, cat: cat });
  renderGamepads(filtered);

  var title = document.getElementById('reviews-title');
  if (title && (q || cat)) {
    var catLabel = (cat && CATEGORIES[cat]) ? CATEGORIES[cat].label : '';
    var qLabel = q ? 'по запросу «' + q + '»' : '';
    var parts = [catLabel, qLabel].filter(Boolean).join(' · ');
    title.innerHTML = 'Обзоры геймпадов <span style="font-size:16px;font-weight:500;color:var(--text-3);display:block;margin-top:8px;">Фильтр: ' + parts + ' · найдено ' + filtered.length + '</span>';
  }

  var searchInput = document.getElementById('search-input');
  if (searchInput && q) searchInput.value = q;

  updateCounters();

  console.log('Gamepad Hub загружен. Геймпадов:', GAMEPADS.length, '| Отфильтровано:', filtered.length);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();