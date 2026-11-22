// ===== ТАБЫ + ТЕСТЕР ГЕЙМПАДА (Gamepad API) =====
(function() {
  var TABS = ['home', 'catalog', 'kb', 'testing', 'tester', 'drivers', 'about', 'forza'];
  var views = {};
  for (var vi = 0; vi < TABS.length; vi++) views[TABS[vi]] = document.getElementById('view-' + TABS[vi]);
  var viewTester = views.tester;
  if (!viewTester) return;

  var tabs = document.querySelectorAll('#main-tabs a');
  var active = false;
  var sel = -1;
  var raf = 0;

  // ---------- Экраны (SPA-вкладки) ----------
  function showTab(name, opts) {
    var key = TABS.indexOf(name) !== -1 ? name : 'home';
    if (key === 'catalog' && window.setCatalogFilter) window.setCatalogFilter(opts || {});
    for (var i = 0; i < TABS.length; i++) {
      if (views[TABS[i]]) views[TABS[i]].hidden = TABS[i] !== key;
    }
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].classList.toggle('active', tabs[j].getAttribute('data-tab') === key);
    }
    active = key === 'tester';
    window.scrollTo(0, 0);
    if (active) loop();
  }
  window.showTab = showTab;

  function fromHash() {
    var h = location.hash.replace('#', '');
    showTab(h === 'gamepad-tester' ? 'tester' : h);
  }
  function bindTabLink(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      var h = this.getAttribute('href').replace('#', '');
      if (location.hash === '#' + h) showTab(h); else location.hash = h;
    });
  }
  for (var ti = 0; ti < tabs.length; ti++) bindTabLink(tabs[ti]);
  // Внутренние ссылки на вкладки (чипы и т.п.), кроме карточек категорий
  var inner = document.querySelectorAll('main a[href^="#"]:not([data-cat])');
  for (var ii = 0; ii < inner.length; ii++) bindTabLink(inner[ii]);
  var fl = document.querySelectorAll('footer a[href^="#"]:not([data-footer-filter])');
  for (var fi = 0; fi < fl.length; fi++) bindTabLink(fl[fi]);
  window.addEventListener('hashchange', fromHash);
  fromHash();

  // Вызывается из модального окна обзора
  window.goToTester = function(e) {
    if (e) e.preventDefault();
    if (typeof closeGamepadModal === 'function') closeGamepadModal();
    if (location.hash === '#tester') showTab('tester'); else location.hash = '#tester';
    return false;
  };

  // ---------- Тестер ----------
  var $ = function(id) { return document.getElementById(id); };
  var slotsEl = $('gt-slots'), waitEl = $('gt-wait'), gridEl = $('gt-grid');
  var btnsEl = $('gt-btns'), statusEl = $('gt-status'), nameEl = $('gt-name');
  var circBtn = $('gt-circ'), circ = false;
  var traces = [[], []];
  var cells = [];
  var vibTimer = 0;

  for (var i = 0; i <= 16; i++) {
    var d = document.createElement('div');
    d.className = 'gt-b';
    d.innerHTML = 'B' + i + '<i>0.00</i>';
    btnsEl.appendChild(d);
    cells.push({ el: d, val: d.firstElementChild, svg: $('s-b' + i), last: -1 });
  }

  function pads() {
    var l = navigator.getGamepads ? navigator.getGamepads() : [];
    return l || [];
  }
  function shortName(id) { return id.replace(/\s*\(.*$/, '').slice(0, 40); }

  var slotKey = '';
  function renderSlots(list) {
    var key = sel + '|';
    for (var i = 0; i < 4; i++) key += (list[i] ? list[i].id : '-') + '|';
    if (key === slotKey) return;
    slotKey = key;
    slotsEl.innerHTML = '';
    for (var j = 0; j < 4; j++) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'gt-slot' + (list[j] ? ' on' : '') + (j === sel ? ' sel' : '');
      b.textContent = (j + 1) + ': ' + (list[j] ? shortName(list[j].id) : 'None detected');
      if (list[j]) (function(n) { b.onclick = function() { sel = n; traces = [[], []]; }; })(j);
      slotsEl.appendChild(b);
    }
  }

  var C_OK = '#16A34A', C_WARN = '#D97706', C_BAD = '#DC2626';
  function errColor(e) { return e <= 0.03 ? C_OK : (e <= 0.08 ? C_WARN : C_BAD); }

  function drawStick(canvas, x, y, trace, err) {
    var c = canvas.getContext('2d'), w = canvas.width, h = w / 2, r = h - 8;
    c.clearRect(0, 0, w, w);
    c.strokeStyle = '#CBD5E1'; c.lineWidth = 2;
    c.beginPath(); c.arc(h, h, r, 0, 6.2832); c.stroke();
    c.lineWidth = 1;
    c.beginPath(); c.moveTo(h, 8); c.lineTo(h, w - 8); c.moveTo(8, h); c.lineTo(w - 8, h); c.stroke();
    if (circ) {
      for (var i = 0; i < trace.length; i++) {
        var tx = trace[i][0], ty = trace[i][1];
        c.fillStyle = errColor(Math.abs(1 - Math.sqrt(tx * tx + ty * ty)));
        c.fillRect(h + tx * r - 1.5, h + ty * r - 1.5, 3, 3);
      }
      if (err >= 0) {
        c.fillStyle = errColor(err); c.font = 'bold 13px monospace';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText('Avg Error: ' + (err * 100).toFixed(1) + '%', h, h - r * 0.5);
      }
    }
    c.fillStyle = '#2563eb';
    c.beginPath(); c.arc(h + x * r, h + y * r, 9, 0, 6.2832); c.fill();
  }

  function fmt(v) { return (v < 0 ? '' : '+') + v.toFixed(5); }

  // 360 секторов по 1°: максимальный радиус отклонения в каждом
  var secs = [new Float32Array(360), new Float32Array(360)];
  function sector(s, x, y) {
    var r = Math.sqrt(x * x + y * y);
    if (r <= 0.7) return;
    var k = Math.floor((Math.atan2(y, x) + Math.PI) / (2 * Math.PI) * 360) % 360;
    if (r > s[k]) s[k] = r;
  }
  function avgErr(s) {
    var sum = 0, n = 0;
    for (var i = 0; i < 360; i++) if (s[i] > 0) { sum += Math.abs(1 - s[i]); n++; }
    return n ? sum / n : -1;
  }
  function errHtml(e) {
    return 'Avg Error: ' + (e < 0 ? '—' : '<b style="color:' + errColor(e) + '">' + (e * 100).toFixed(1) + '%</b>');
  }

  function loop() {
    if (!active || raf) return;
    raf = requestAnimationFrame(function() { raf = 0; frame(); loop(); });
  }

  function frame() {
    var list = pads();
    if (sel < 0 || !list[sel]) {
      sel = -1;
      for (var i = 0; i < 4; i++) if (list[i]) { sel = i; break; }
    }
    renderSlots(list);
    var gp = sel >= 0 ? list[sel] : null;
    waitEl.hidden = !!gp; $('gt-left').hidden = !gp;
    gridEl.classList.toggle('idle', !gp);
    if (!gp) return;

    var st = '<span>INDEX <b>' + gp.index + '</b></span><span>CONNECTED <b>' + (gp.connected ? 'true' : 'false') + '</b></span>' +
      '<span>MAPPING <b>' + (gp.mapping || 'none') + '</b></span><span>VIBRATION <b>' + (gp.vibrationActuator ? 'yes' : 'no') + '</b></span>';
    if (statusEl._s !== st) {
      statusEl._s = st;
      statusEl.innerHTML = st;
      nameEl.textContent = shortName(gp.id);
    }

    for (var n = 0; n < cells.length; n++) {
      var b = gp.buttons[n], v = b ? b.value : 0, cell = cells[n];
      if (v !== cell.last) {
        cell.last = v;
        var on = v > 0.5 || (b && b.pressed);
        cell.val.textContent = v.toFixed(2);
        cell.el.classList.toggle('on', !!on);
        if (cell.svg) cell.svg.classList.toggle('on', !!on);
        if (n === 6 || n === 7) {
          var f = $('s-b' + n + 'f');
          f.setAttribute('height', 30 * v);
          f.setAttribute('y', 36 - 30 * v);
          $(n === 6 ? 's-lt-pct' : 's-rt-pct').textContent = Math.round(v * 100) + '%';
        }
      }
    }

    var a = gp.axes, lx = a[0] || 0, ly = a[1] || 0, rx = a[2] || 0, ry = a[3] || 0;
    if (circ) {
      sector(secs[0], lx, ly); sector(secs[1], rx, ry);
    }
    var le = avgErr(secs[0]), re = avgErr(secs[1]);
    $('gt-lv').innerHTML = 'AXIS 0: ' + fmt(lx) + '<br>AXIS 1: ' + fmt(ly) + '<br>' + errHtml(le);
    $('gt-rv').innerHTML = 'AXIS 2: ' + fmt(rx) + '<br>AXIS 3: ' + fmt(ry) + '<br>' + errHtml(re);
    if (circ) {
      if (lx * lx + ly * ly > 0.4225) traces[0].push([lx, ly]);
      if (rx * rx + ry * ry > 0.4225) traces[1].push([rx, ry]);
      if (traces[0].length > 3000) traces[0].shift();
      if (traces[1].length > 3000) traces[1].shift();
    }
    drawStick($('gt-lc'), lx, ly, traces[0], circ ? le : -1);
    drawStick($('gt-rc'), rx, ry, traces[1], circ ? re : -1);
    $('s-ls').setAttribute('transform', 'translate(' + (lx * 12) + ' ' + (ly * 12) + ')');
    $('s-rs').setAttribute('transform', 'translate(' + (rx * 12) + ' ' + (ry * 12) + ')');
  }

  circBtn.onclick = function() {
    circ = !circ;
    traces = [[], []];
    secs[0].fill(0); secs[1].fill(0);
    circBtn.classList.toggle('on', circ);
  };

  // ---------- Вибрация ----------
  function actuator() {
    var gp = sel >= 0 ? pads()[sel] : null;
    return gp && gp.vibrationActuator;
  }
  function rumble(ms) {
    var act = actuator();
    if (!act || !act.playEffect) return false;
    act.playEffect('dual-rumble', { duration: ms, strongMagnitude: 1, weakMagnitude: 1 }).catch(function() {});
    return true;
  }
  function stopVib() {
    clearInterval(vibTimer); vibTimer = 0;
    $('gt-vibinf').classList.remove('on');
    var act = actuator();
    if (act && act.reset) act.reset();
  }
  $('gt-vib1').onclick = function() { stopVib(); rumble(1000); };
  $('gt-vibinf').onclick = function() {
    if (vibTimer) return stopVib();
    if (!rumble(2000)) return;
    $('gt-vibinf').classList.add('on');
    vibTimer = setInterval(function() { rumble(2000); }, 1800);
  };

  window.addEventListener('gamepaddisconnected', function() { stopVib(); slotKey = ''; });
  window.addEventListener('gamepadconnected', function() { slotKey = ''; });

  fromHash();
})();
