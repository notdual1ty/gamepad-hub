#!/usr/bin/env node
/*
 * Синхронизация задержек с gamepadla.com -> gamepadla-data.json
 *
 * Запуск:  node scripts/sync-gamepadla.js [--dry]
 * Требуется Node.js 18+ (глобальный fetch), внешних зависимостей нет.
 *
 * Для каждой модели из MODELS скачивается страница Gamepadla, из таблицы
 * «Latency» берётся первая (PRIMARY) строка по типу подключения:
 *   Cable -> cableBtn/cableStick, Dongle -> dongleBtn/dongleStick,
 *   Bluetooth -> btBtn/btStick, плюс Polling Rate (Гц).
 * Если страницы нет или она не разобралась, у модели остаются прежние значения.
 * Поле "updated" меняется только когда данные реально изменились,
 * поэтому ежедневный workflow не плодит пустые коммиты.
 */
'use strict';

var fs = require('fs');
var path = require('path');

var FILE = path.join(__dirname, '..', 'gamepadla-data.json');
var BASE = 'https://gamepadla.com/';
var DRY = process.argv.indexOf('--dry') !== -1;

// id совпадает с id в data.js (GAMEPADS). slugs — кандидаты страниц на gamepadla.com.
// Для моделей, которых на Gamepadla нет (Apex 6), slugs пустой — значения остаются ручными.
var MODELS = [
  { id: 'flydigi-vader-4-pro', slugs: ['flydigi-vader-4-pro'] },
  { id: 'flydigi-vader-5s', slugs: ['flydigi-vader-5s'] },
  { id: 'flydigi-apex-4', slugs: ['flydigi-apex-4'] },
  { id: 'apex-5', slugs: ['flydigi-apex-5'] },
  { id: 'flydigi-apex-6', slugs: [] },
  { id: 'xbox-elite-2', slugs: ['xbox-elite-series-2-controller'] },
  { id: 'zd-ultimate-legend', slugs: ['zd-ultimate-legend'] },
  { id: 'gamesir-g7-pro', slugs: ['gamesir-g7-pro'] },
  { id: 'dualsense', slugs: ['sony-dualsense'] },
  { id: 'xbox-one-1708', slugs: ['xbox-one-controller'] },
  { id: 'xbox-series-xs', slugs: ['xbox-core-controller'] }
];

var FIELDS = ['pollingRate', 'cableBtn', 'cableStick', 'dongleBtn', 'dongleStick', 'btBtn', 'btStick'];

function num(s) {
  var n = parseFloat(s);
  return isFinite(n) ? Math.round(n * 10) / 10 : null;
}

// Измеренный опрос «плавает» (997, 923, 7786) — приводим к ближайшему стандартному значению (±15%)
function snapRate(v) {
  var std = [125, 250, 500, 1000, 2000, 4000, 8000], best = null;
  std.forEach(function (r) { if (Math.abs(v - r) / r <= 0.15 && (best === null || Math.abs(v - r) < Math.abs(v - best))) best = r; });
  return best === null ? Math.round(v) : best;
}

function connKey(label) {
  var t = String(label).toLowerCase();
  if (t.indexOf('cable') !== -1 || t.indexOf('wired') !== -1) return 'cable';
  if (t.indexOf('dongle') !== -1 || t.indexOf('2.4') !== -1) return 'dongle';
  if (t.indexOf('bluetooth') !== -1) return 'bt';
  return null;
}

// Разбор HTML страницы Gamepadla -> { cable:{btn,stick,poll,primary}, dongle:{...}, bt:{...} }
function parsePage(html) {
  var start = html.indexOf("class='latency_table'");
  if (start === -1) return null;
  var end = html.indexOf('</table>', start);
  var table = html.slice(start, end === -1 ? undefined : end);
  var rows = table.split(/<tr class='merged_table_row/).slice(1);
  var out = {};
  rows.forEach(function (row) {
    var tr = row.split('</tr>')[0];
    var m = tr.match(/<\/td><td class=''>\s*([A-Za-z0-9 .\-]+?)\s*(?:<span|<\/td>)/);
    var key = m ? connKey(m[1]) : null;
    if (!key) return;
    var primary = tr.indexOf('primary-badge') !== -1;
    var cell = tr.match(/merged-metric-cell'>([\s\S]*?)<\/td>/);
    if (!cell) return;
    var btn = cell[1].match(/title='Button'>[^<]*<\/span><span class='merged-metric-value'[^>]*>([\d.]+)/);
    var stick = cell[1].match(/title='Stick'>[^<]*<\/span><span class='merged-metric-value'[^>]*>([\d.]+)/);
    var poll = tr.match(/<\/td><td class='[^']*'>([\d.]+)<\/td><td class='[^']*merged-metric-cell'>/);
    var o = out[key] = out[key] || { btn: null, stick: null, poll: null, _p: {} };
    // Кнопки и стики на странице могут быть в разных строках: берём значение из PRIMARY-строки, иначе из первой
    [['btn', btn ? num(btn[1]) : null], ['stick', stick ? num(stick[1]) : null],
     ['poll', poll ? snapRate(parseFloat(poll[1])) : null]].forEach(function (kv) {
      if (kv[1] === null) return;
      if (o[kv[0]] === null || (primary && !o._p[kv[0]])) { o[kv[0]] = kv[1]; o._p[kv[0]] = primary; }
    });
  });
  return Object.keys(out).length ? out : null;
}

function fetchText(url) {
  return fetch(url, {
    headers: { 'User-Agent': 'gamepad-hub-sync/1.0 (+static site, daily job)', 'Accept': 'text/html' },
    redirect: 'follow'
  }).then(function (res) {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.text();
  });
}

function loadJson() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch (e) {
    return { updated: null, source: BASE, models: {} };
  }
}

// Применяет разобранные данные к записи модели; возвращает true, если что-то изменилось
function applyParsed(entry, p) {
  var next = {
    cableBtn: p.cable ? p.cable.btn : entry.cableBtn,
    cableStick: p.cable ? p.cable.stick : entry.cableStick,
    dongleBtn: p.dongle ? p.dongle.btn : entry.dongleBtn,
    dongleStick: p.dongle ? p.dongle.stick : entry.dongleStick,
    btBtn: p.bt ? p.bt.btn : entry.btBtn,
    btStick: p.bt ? p.bt.stick : entry.btStick
  };
  var poll = ['cable', 'dongle', 'bt'].map(function (k) { return p[k] && p[k].poll; })
    .filter(function (v) { return typeof v === 'number'; })[0];
  next.pollingRate = typeof poll === 'number' ? poll : entry.pollingRate;
  var changed = false;
  FIELDS.forEach(function (f) {
    if (next[f] === undefined) next[f] = null;
    if (entry[f] !== next[f]) { entry[f] = next[f]; changed = true; }
  });
  if (entry.verified !== true) { entry.verified = true; changed = true; }
  return changed;
}

function main() {
  var data = loadJson();
  data.models = data.models || {};
  var anyChanged = false, okCount = 0, failCount = 0;

  var chain = MODELS.reduce(function (prev, m) {
    return prev.then(function () {
      var entry = data.models[m.id];
      if (!entry) { entry = data.models[m.id] = { verified: false }; anyChanged = true; }
      if (!m.slugs.length) {
        console.log('- ' + m.id + ': нет страницы на Gamepadla, значения остаются ручными');
        return null;
      }
      return m.slugs.reduce(function (p2, slug) {
        return p2.then(function (done) {
          if (done) return true;
          var url = BASE + slug + '.html';
          return fetchText(url).then(function (html) {
            var parsed = parsePage(html);
            if (!parsed) { console.warn('! ' + m.id + ': таблица не найдена на ' + url); return false; }
            if (entry.url !== url) { entry.url = url; anyChanged = true; }
            var ch = applyParsed(entry, parsed);
            if (ch) anyChanged = true;
            okCount++;
            console.log((ch ? '* ' : '= ') + m.id + ': ' + (ch ? 'обновлено' : 'без изменений') + ' (' + url + ')');
            return true;
          }).catch(function (err) {
            console.warn('! ' + m.id + ': ' + url + ' — ' + err.message);
            return false;
          });
        });
      }, Promise.resolve(false)).then(function (done) { if (!done) failCount++; });
    });
  }, Promise.resolve());

  return chain.then(function () {
    if (anyChanged) data.updated = new Date().toISOString();
    console.log('\nУспешно: ' + okCount + ', ошибок: ' + failCount + (anyChanged ? ', данные изменились' : ', изменений нет'));
    if (okCount === 0) throw new Error('Не удалось обновить ни одной модели — файл не тронут.');
    if (anyChanged && !DRY) {
      fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + '\n', 'utf8');
      console.log('Записан ' + path.relative(process.cwd(), FILE));
    }
  });
}

main().catch(function (e) {
  console.error(e.message || e);
  process.exit(1);
});
