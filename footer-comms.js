(function () {
  var badge = document.getElementById('comms-gh-badge');
  if (!badge) return;

  var KEY = 'gh-pushed-at-v1';
  var TTL = 6 * 60 * 60 * 1000;
  var API = 'https://api.github.com/repos/notdual1ty/gamepad-hub';

  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function show(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return;
    badge.textContent = 'UPD: ' + pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear();
  }
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function write(iso) {
    try { localStorage.setItem(KEY, JSON.stringify({ t: new Date().getTime(), v: iso })); } catch (e) {}
  }

  var c = read();
  if (c && c.v) {
    show(c.v);
    if (new Date().getTime() - c.t < TTL) return;
  }

  var x = new XMLHttpRequest();
  x.open('GET', API, true);
  x.setRequestHeader('Accept', 'application/vnd.github+json');
  x.onload = function () {
    if (x.status !== 200) return;
    try {
      var iso = JSON.parse(x.responseText).pushed_at;
      if (iso) { write(iso); show(iso); }
    } catch (e) {}
  };
  x.send();
})();
