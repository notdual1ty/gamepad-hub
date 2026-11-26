// Виджет «Будущие релизы // RADAR»: сначала мгновенно data/releases.json,
// затем (если есть feeds) подмешиваем свежие видео YouTube через rss2json.
(function() {
  var box = document.getElementById('radar-list');
  if (!box) return;
  var KEYWORDS = /controller|gamepad|ces|gamescom|unboxing|announce|геймпад|контроллер|анонс/i;
  var CACHE_KEY = 'gh_radar_v1', TTL = 6 * 60 * 60 * 1000, MAX = 4;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) { return /^(https?:\/\/|#)/i.test(u || '') ? u : '#catalog'; }
  function render(items) {
    box.innerHTML = items.slice(0, MAX).map(function(it) {
      var ext = /^https?:/i.test(it.url);
      return '<li><a href="' + esc(safeUrl(it.url)) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span class="rd-main"><strong>' + esc(it.name) + '</strong><small>' + esc(it.source) + '</small></span>' +
        '<span class="rd-status">' + esc(it.status) + '</span></a></li>';
    }).join('');
  }
  function fetchFeed(id) {
    var rss = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + encodeURIComponent(id);
    return fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rss))
      .then(function(r) { return r.json(); }).then(function(j) {
        if (!j || j.status !== 'ok') throw new Error('rss');
        return j.items.filter(function(v) { return KEYWORDS.test(v.title); }).slice(0, 2).map(function(v) {
          return { name: v.title.length > 48 ? v.title.slice(0, 47) + '…' : v.title,
                   source: 'YouTube // ' + (j.feed && j.feed.title || ''), status: 'Видео', url: v.link };
        });
      });
  }
  function live(feeds) {
    try {
      var c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
      if (c && c.time && Date.now() - c.time < TTL) return Promise.resolve(c.items);
    } catch (e) {}
    return Promise.all(feeds.map(function(f) { return fetchFeed(f).catch(function() { return []; }); }))
      .then(function(res) {
        var items = [].concat.apply([], res);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), items: items })); } catch (e) {}
        return items;
      });
  }

  fetch('data/releases.json').then(function(r) { return r.json(); }).then(function(d) {
    var base = d.items || [];
    render(base);
    if (!d.feeds || !d.feeds.length) return;
    live(d.feeds).then(function(extra) {
      if (extra.length) render(extra.slice(0, 2).concat(base));
    }).catch(function() {});
  }).catch(function() {
    box.innerHTML = '<li class="rd-empty">Список релизов недоступен</li>';
  });
})();
