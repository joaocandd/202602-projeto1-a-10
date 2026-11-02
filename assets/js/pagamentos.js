// Filtros da lista de pagamentos (Todos / Pagos / Aguardando / Em atraso).
// A lista já vem completa no HTML; aqui só mostramos/ocultamos os itens,
// recalculamos os contadores e mantemos o aria-pressed em dia.
(function () {
  var grupo = document.querySelector('[data-filtros]');
  if (!grupo) return;

  var botoes = Array.prototype.slice.call(grupo.querySelectorAll('[data-filtro]'));
  var itens = Array.prototype.slice.call(document.querySelectorAll('[data-status]'));
  var vazio = document.querySelector('[data-vazio]');

  function contar(status) {
    if (status === 'todos') return itens.length;
    return itens.filter(function (item) { return item.dataset.status === status; }).length;
  }

  botoes.forEach(function (botao) {
    botao.textContent = botao.dataset.label + ' (' + contar(botao.dataset.filtro) + ')';
  });

  function aplicar(filtro) {
    var visiveis = 0;
    itens.forEach(function (item) {
      var mostrar = filtro === 'todos' || item.dataset.status === filtro;
      item.hidden = !mostrar;
      if (mostrar) visiveis++;
    });
    botoes.forEach(function (botao) {
      botao.setAttribute('aria-pressed', String(botao.dataset.filtro === filtro));
    });
    if (vazio) vazio.hidden = visiveis > 0;
  }

  grupo.addEventListener('click', function (evento) {
    var botao = evento.target.closest('[data-filtro]');
    if (botao) aplicar(botao.dataset.filtro);
  });
})();
