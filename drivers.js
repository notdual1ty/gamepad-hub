// ===== КАТАЛОГ ДРАЙВЕРОВ, ПРОШИВОК И УТИЛИТ =====
const DRIVERS = [
  {
    id: "xbox-accessories",
    name: "Xbox Accessories",
    type: "driver",
    version: "2310.2310.5.0",
    size: "45 МБ",
    date: "2026-10-15",
    compatible: ["Xbox Wireless Controller", "Xbox Elite Series 2", "Xbox Adaptive Controller"],
    os: ["Windows 10", "Windows 11"],
    description: "Официальное приложение Microsoft. Обновление прошивки, настройка кнопок Elite, проверка подключения. Обязательно для владельцев Xbox-геймпадов на PC.",
    url: "https://apps.microsoft.com/detail/9NBLGGH30GJ3",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/1"
  },
  {
    id: "dualsense-firmware",
    name: "DualSense Firmware Updater",
    type: "firmware",
    version: "08.01.00",
    size: "6 МБ",
    date: "2026-11-10",
    compatible: ["Sony DualSense", "Sony DualSense Edge"],
    os: ["Windows 10", "Windows 11", "PS5"],
    description: "Обновление через USB-C. Улучшает работу адаптивных триггеров в PC-портах, исправляет дрифт стиков на ранних ревизиях.",
    url: "https://www.playstation.com/support/hardware/ps5-dualsense-wireless-controller-update/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/2"
  },
  {
    id: "x360ce",
    name: "x360ce",
    type: "utility",
    version: "4.17.0",
    size: "8 МБ",
    date: "2026-08-10",
    compatible: ["Любой DirectInput-геймпад"],
    os: ["Windows 7", "Windows 10", "Windows 11"],
    description: "Эмуляция Xbox 360-контроллера. Позволяет использовать любой геймпад в играх без поддержки DirectInput. Бесплатно, open-source.",
    url: "https://www.x360ce.com/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/3"
  },
  {
    id: "rewasd",
    name: "reWASD",
    type: "utility",
    version: "3.2.1",
    size: "45 МБ",
    date: "2026-11-01",
    compatible: ["Любой геймпад"],
    os: ["Windows 10", "Windows 11"],
    description: "Продвинутый реммаппинг. Макросы, слои, эмуляция гироскопа, поддержка Steam Deck. Платная ($7), есть триал 14 дней.",
    url: "https://www.rewasd.com/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/4"
  },
  {
    id: "ds4windows",
    name: "DS4Windows",
    type: "utility",
    version: "3.3.3",
    size: "12 МБ",
    date: "2026-09-25",
    compatible: ["Sony DualShock 4", "Sony DualSense"],
    os: ["Windows 10", "Windows 11"],
    description: "Эмуляция Xbox 360-контроллера для геймпадов Sony. Бесплатно, open-source. Поддержка гироскопа, тачпада, RGB.",
    url: "https://github.com/Ryochan7/DS4Windows",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/5"
  },
  {
    id: "steam-input",
    name: "Steam Input",
    type: "utility",
    version: "Встроено в Steam",
    size: "—",
    date: "2026-11-20",
    compatible: ["Любой геймпад"],
    os: ["Windows", "macOS", "Linux", "SteamOS"],
    description: "Встроено в Steam. Поддержка любого геймпада в Steam-играх, кастомизация кнопок, гироскоп, макросы. Бесплатно.",
    url: "https://store.steampowered.com/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/6"
  },
  {
    id: "apex5-driver",
    name: "Apex 5 Driver",
    type: "driver",
    version: "2.1.4",
    size: "15 МБ",
    date: "2026-10-15",
    compatible: ["Apex 5", "Apex 5 Pro"],
    os: ["Windows 10", "Windows 11"],
    description: "Родной драйвер. Нужен только для RGB-подсветки и макросов. Для базовой работы в Windows не требуется — определяется как XInput.",
    url: "https://example.com/apex5-driver",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/7"
  },
  {
    id: "gamepad-tester",
    name: "Gamepad Tester",
    type: "utility",
    version: "Web-версия",
    size: "—",
    date: "2026-11-22",
    compatible: ["Любой геймпад"],
    os: ["Любая ОС с браузером"],
    description: "Онлайн-проверка всех кнопок, стиков и триггеров. Показывает deadzone, кривые отклика, точные значения осей. Бесплатно.",
    url: "https://gamepad-tester.com/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/8"
  },
  {
    id: "8bitdo-firmware",
    name: "8BitDo Firmware Updater",
    type: "firmware",
    version: "1.35",
    size: "3 МБ",
    date: "2026-07-20",
    compatible: ["8BitDo Ultimate", "8BitDo SN30 Pro", "8BitDo Pro 2"],
    os: ["Windows", "macOS"],
    description: "Обновление прошивки геймпадов 8BitDo. Добавляет поддержку новых платформ, исправляет баги подключения.",
    url: "https://www.8bitdo.com/support/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/9"
  },
  {
    id: "joytokey",
    name: "JoyToKey",
    type: "utility",
    version: "7.1.2",
    size: "2 МБ",
    date: "2026-06-15",
    compatible: ["Любой геймпад"],
    os: ["Windows 7", "Windows 10", "Windows 11"],
    description: "Назначение действий клавиатуры на кнопки геймпада. Полезно для старых игр и эмуляторов. Условно-бесплатная ($7).",
    url: "https://joytokey.net/en/",
    discussion: "https://github.com/ваш-username/gamepad-hub/discussions/10"
  }
];

// ===== МАППИНГ ТИПОВ =====
const TYPE_LABELS = {
  driver: 'Драйвер',
  firmware: 'Прошивка',
  utility: 'Утилита'
};

const TYPE_COLORS = {
  driver: '#2563eb',
  firmware: '#7c3aed',
  utility: '#059669'
};

let currentFilter = 'all';
let currentQuery = '';

function renderDrivers() {
  const container = document.getElementById('driver-list');
  if (!container) return;

  let list = DRIVERS.filter(function(d) {
    const matchType = currentFilter === 'all' || d.type === currentFilter;
    const q = currentQuery.toLowerCase().trim();
    const matchQuery = !q ||
      d.name.toLowerCase().indexOf(q) !== -1 ||
      d.description.toLowerCase().indexOf(q) !== -1 ||
      d.compatible.some(function(c) { return c.toLowerCase().indexOf(q) !== -1; });
    return matchType && matchQuery;
  });

  if (list.length === 0) {
    container.innerHTML = '<p class="empty-state">Ничего не найдено. Попробуйте изменить запрос или фильтр.</p>';
    return;
  }

  container.innerHTML = list.map(function(d) {
    const typeColor = TYPE_COLORS[d.type] || '#666';
    const compatible = d.compatible.join(', ');
    return '<div class="driver-card">' +
      '<div class="driver-header">' +
        '<span class="driver-type" style="background:' + typeColor + '">' + TYPE_LABELS[d.type] + '</span>' +
        '<span class="driver-version">v' + d.version + '</span>' +
      '</div>' +
      '<h3>' + d.name + '</h3>' +
      '<p class="driver-meta">' + d.size + ' · ' + d.date + ' · ' + d.os.join(', ') + '</p>' +
      '<p class="driver-desc">' + d.description + '</p>' +
      '<p class="driver-compat"><strong>Совместимо:</strong> ' + compatible + '</p>' +
      '<div class="driver-actions">' +
        '<a href="' + d.url + '" class="btn btn-primary" target="_blank" rel="noopener">Скачать / Перейти</a>' +
        (d.discussion ? '<a href="' + d.discussion + '" class="btn btn-secondary" target="_blank" rel="noopener">Обсудить</a>' : '') +
      '</div>' +
    '</div>';
  }).join('');
}

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentFilter = btn.dataset.type;
    renderDrivers();
  });
});

document.getElementById('driver-query').addEventListener('input', function(e) {
  currentQuery = e.target.value;
  renderDrivers();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderDrivers);
} else {
  renderDrivers();
}