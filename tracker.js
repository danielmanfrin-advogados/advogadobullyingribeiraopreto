(function () {
  var C = window.SITE_CONFIG || {};
  function dominioOrigem() {
    try {
      if (!document.referrer) return 'direto';
      return new URL(document.referrer).hostname.replace(/^www\./i, '') || 'direto';
    } catch (e) { return 'direto'; }
  }
  function registrar(el) {
    if (!C.endpoint) return;
    // Somente os cinco valores da interação; o Apps Script calcula data, dia, hora e dia da semana.
    var dados = {
      site: C.site || location.hostname,
      acao: el.getAttribute('data-acao') || '',
      local: el.getAttribute('data-local') || '',
      pagina: location.pathname,
      origem: dominioOrigem()
    };
    var qs = Object.keys(dados).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(dados[k]);
    }).join('&');
    try {
      fetch(C.endpoint + '?' + qs, { method: 'GET', mode: 'no-cors', keepalive: true });
    } catch (e) {}
  }
  document.addEventListener('click', function (ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest('[data-acao]') : null;
    if (el) registrar(el);
  }, true);
})();
