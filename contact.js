(function () {
  var C = window.SITE_CONFIG || {};
  function digits(value) { return String(value || '').replace(/\D/g, ''); }
  function setWhatsApp(link, message) {
    var number = digits(C.whatsapp);
    if (!number) return;
    link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message || C.mensagem || '');
    link.target = '_blank';
    link.rel = 'noopener';
  }
  document.querySelectorAll('a[data-msg]').forEach(function (link) {
    setWhatsApp(link, link.getAttribute('data-msg'));
  });
  var phone = digits(C.telefone);
  if (phone) {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.href = 'tel:+' + phone;
    });
  }
  var quick = document.getElementById('rapido');
  if (quick) {
    var place = document.getElementById('r-onde');
    var topic = document.getElementById('r-oque');
    var button = quick.querySelector('a.btn.zap');
    if (place && topic && button) {
      var update = function () {
        var city = C.cidade || 'Ribeirão Preto';
        var where = place.value === '__regiao' ? 'na região de ' + city :
          (place.value ? 'no bairro ' + place.value + ', em ' + city : 'em ' + city);
        var message = 'Olá! Vim pelo site e gostaria de ' + topic.value + ' ' + where + '.';
        button.setAttribute('data-msg', message);
        setWhatsApp(button, message);
      };
      place.addEventListener('change', update);
      topic.addEventListener('change', update);
      update();
    }
  }
})();
