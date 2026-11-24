/* Site da apresentação final · Squad 10 · Bulbe Energia
 *
 * Regra do histórico: esta página nunca cria entradas no histórico do navegador.
 * A rolagem usa scrollIntoView, o endereço muda só com history.replaceState e as
 * telas dos celulares são trocadas com location.replace dentro do iframe.
 */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
  var telaLarga = window.matchMedia('(min-width: 68.75rem)');

  function todos(seletor, raiz) {
    return Array.prototype.slice.call((raiz || document).querySelectorAll(seletor));
  }

  function comportamento() {
    return reduzMovimento.matches ? 'auto' : 'smooth';
  }

  /* ------------------------------------------------------------------ */
  /* Seções: rolagem, índice e endereço                                  */
  /* ------------------------------------------------------------------ */

  var paradas = todos('[data-parada]');
  var indice = document.querySelector('.indice');
  var alternarIndice = document.querySelector('.indice-alternar');
  var botoesIndice = todos('.indice-lista [data-ir]');
  var paradaAtual = null;

  function fecharIndice() {
    if (!indice) return;
    indice.classList.remove('aberto');
    if (alternarIndice) alternarIndice.setAttribute('aria-expanded', 'false');
  }

  function irPara(id, focar) {
    var alvo = document.getElementById(id);
    if (!alvo) return;
    alvo.scrollIntoView({ behavior: comportamento(), block: 'start' });
    if (focar && typeof alvo.focus === 'function') alvo.focus({ preventScroll: true });
  }

  document.addEventListener('click', function (evento) {
    var botao = evento.target.closest('[data-ir]');
    if (!botao) return;
    evento.preventDefault();
    irPara(botao.getAttribute('data-ir'), true);
    fecharIndice();
  });

  if (alternarIndice) {
    alternarIndice.addEventListener('click', function () {
      var aberto = indice.classList.toggle('aberto');
      alternarIndice.setAttribute('aria-expanded', String(aberto));
    });
    document.addEventListener('click', function (evento) {
      if (!indice.contains(evento.target)) fecharIndice();
    });
  }

  // Seção em que a pessoa está: a última cujo topo já passou do meio da tela
  function atualizarParadaAtual() {
    var limite = window.innerHeight * 0.5;
    var atual = paradas[0];
    paradas.forEach(function (parada) {
      if (parada.getBoundingClientRect().top <= limite) atual = parada;
    });
    if (!atual || atual === paradaAtual) return;
    paradaAtual = atual;

    var idNoIndice = atual.hasAttribute('data-indice') ? atual.id : atual.getAttribute('data-grupo');
    botoesIndice.forEach(function (botao) {
      if (botao.getAttribute('data-ir') === idNoIndice) botao.setAttribute('aria-current', 'true');
      else botao.removeAttribute('aria-current');
    });

    // Reflete a seção no endereço sem criar entrada no histórico
    try {
      var endereco = location.pathname + location.search + (atual === paradas[0] ? '' : '#' + atual.id);
      history.replaceState(history.state, '', endereco);
    } catch (erro) { /* file:// em alguns navegadores */ }
  }

  var quadroPendente = false;
  function aoRolar() {
    if (quadroPendente) return;
    quadroPendente = true;
    requestAnimationFrame(function () {
      quadroPendente = false;
      atualizarParadaAtual();
    });
  }
  window.addEventListener('scroll', aoRolar, { passive: true });

  /* ------------------------------------------------------------------ */
  /* Modo de apresentação: teclado e tela cheia                          */
  /* ------------------------------------------------------------------ */

  // Avança ou volta uma parada. Em blocos mais altos que a tela, rola uma tela
  // por vez para nada ficar de fora.
  function mudarParada(direcao) {
    var altura = window.innerHeight;
    var folga = 8;
    var alvo = null;
    var topo;

    if (direcao > 0) {
      alvo = paradas.find(function (parada) { return parada.getBoundingClientRect().top > folga; });
      topo = alvo ? alvo.getBoundingClientRect().top : Infinity;
      if (topo > altura * 1.15) alvo = null;
    } else {
      for (var i = paradas.length - 1; i >= 0; i--) {
        if (paradas[i].getBoundingClientRect().top < -folga) { alvo = paradas[i]; break; }
      }
      topo = alvo ? alvo.getBoundingClientRect().top : -Infinity;
      if (topo < -altura * 1.15) alvo = null;
    }

    if (alvo) alvo.scrollIntoView({ behavior: comportamento(), block: 'start' });
    else window.scrollBy({ top: direcao * altura * 0.85, behavior: comportamento() });
  }

  function alternarTelaCheia() {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(function () {});
    }
  }

  var CAMPOS = 'input, textarea, select, [contenteditable=""], [contenteditable="true"]';

  document.addEventListener('keydown', function (evento) {
    if (evento.defaultPrevented || evento.ctrlKey || evento.metaKey || evento.altKey) return;
    // Dentro de um campo as teclas pertencem ao campo. Dentro de um celular o
    // evento nem chega aqui, porque o foco está no documento do iframe.
    if (evento.target.closest && evento.target.closest(CAMPOS)) return;

    switch (evento.key) {
      case 'ArrowRight':
      case 'PageDown':
        evento.preventDefault();
        mudarParada(1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        evento.preventDefault();
        mudarParada(-1);
        break;
      case 'f':
      case 'F':
        if (evento.shiftKey) return;
        evento.preventDefault();
        alternarTelaCheia();
        break;
    }
  });

  /* ------------------------------------------------------------------ */
  /* Celulares com as telas funcionando                                  */
  /* ------------------------------------------------------------------ */

  var TELA_INICIAL_DO_APP = new URL('pages/Wireframe%2001/index.html', document.baseURI);
  // Voltar das telas: links com history.back() no href ou no onclick
  var VOLTAR_PELO_HISTORICO = 'a[href^="javascript:history.back"], a[onclick*="history.back"]';

  function caminhoLegivel(caminho) {
    try { return decodeURIComponent(caminho); } catch (erro) { return caminho; }
  }

  // Quanto o endereço atual combina com o endereço de um passo.
  // -1: não combina. 0 ou mais: combina; quanto mais parâmetros iguais, melhor.
  // O parâmetro "tel" é ignorado porque muda com o número digitado.
  function pontuar(enderecoDoPasso, atual) {
    var passo = new URL(enderecoDoPasso, document.baseURI);
    if (caminhoLegivel(passo.pathname) !== caminhoLegivel(atual.pathname)) return -1;
    var pontos = 0;
    var combina = true;
    passo.searchParams.forEach(function (valor, chave) {
      if (chave === 'tel') return;
      if (atual.searchParams.get(chave) === valor) pontos += 1;
      else combina = false;
    });
    return combina ? pontos : -1;
  }

  function prepararCelular(celular) {
    var id = celular.getAttribute('data-celular');
    var inicio = celular.getAttribute('data-inicio');
    var iframe = celular.querySelector('iframe');
    var passos = todos('[data-para="' + id + '"]');
    var linkNovaAba = document.querySelector('[data-nova-aba="' + id + '"]');
    var botaoReiniciar = document.querySelector('[data-reiniciar="' + id + '"]');
    var pilha = [];        // telas visitadas neste celular (caminho + parâmetros)
    var carregou = false;  // o iframe já terminou a primeira carga?

    function marcar(botoes) {
      passos.forEach(function (botao) {
        if (botoes.indexOf(botao) >= 0) botao.setAttribute('aria-current', botao.classList.contains('passo') ? 'step' : 'true');
        else botao.removeAttribute('aria-current');
      });
    }

    function marcarPeloEndereco(atual) {
      var melhor = -1;
      var pontos = passos.map(function (botao) {
        var alvos = [botao.getAttribute('data-tela')]
          .concat((botao.getAttribute('data-tambem') || '').split(' '))
          .filter(Boolean);
        var p = Math.max.apply(null, alvos.map(function (alvo) { return pontuar(alvo, atual); }));
        if (p > melhor) melhor = p;
        return p;
      });
      marcar(melhor < 0 ? [] : passos.filter(function (botao, i) { return pontos[i] === melhor; }));
    }

    // Troca a tela sem criar entrada no histórico do navegador
    function abrir(endereco) {
      var absoluto = new URL(endereco, document.baseURI).href;
      if (!carregou) { iframe.src = absoluto; return; }
      try { iframe.contentWindow.location.replace(absoluto); }
      catch (erro) { iframe.src = absoluto; }
    }

    // Voltar: tela anterior deste celular. Sem tela anterior, o endereço do
    // próprio link; se o link só tiver javascript:, a tela inicial do app.
    function voltar(link) {
      var destino;
      var href = link ? link.getAttribute('href') || '' : '';
      if (pilha.length > 1) {
        pilha.pop();
        destino = new URL(pilha[pilha.length - 1], location.href).href;
      } else {
        pilha.length = 0;
        destino = href && !/^javascript:/i.test(href) ? link.href : TELA_INICIAL_DO_APP.href;
      }
      abrir(destino);
    }

    function aoCarregar() {
      var janela, documento, atual;
      try {
        janela = iframe.contentWindow;
        documento = janela.document;
        atual = new URL(janela.location.href);
      } catch (erro) {
        return; // outra origem (ex.: site aberto por file://): sem destaque nem voltar próprio
      }
      if (atual.protocol === 'about:') return;
      carregou = true;
      // pages/index.html só redireciona para a tela inicial
      if (/\/pages\/index\.html$/.test(atual.pathname)) return;

      var chave = atual.pathname + atual.search;
      if (pilha[pilha.length - 1] !== chave) {
        if (pilha[pilha.length - 2] === chave) pilha.pop();
        else pilha.push(chave);
      }

      marcarPeloEndereco(atual);
      if (linkNovaAba) linkNovaAba.href = atual.href;

      if (documento.documentElement.hasAttribute('data-site-pronto')) return;
      documento.documentElement.setAttribute('data-site-pronto', '');

      // Como num celular de verdade, a barra de rolagem não ocupa espaço na tela
      var semBarra = documento.createElement('style');
      semBarra.textContent = 'html{scrollbar-width:none}::-webkit-scrollbar{display:none}';
      (documento.head || documento.documentElement).appendChild(semBarra);

      // history.back() dentro de um iframe mexe no histórico da aba inteira:
      // podia desfazer a navegação de outro celular ou sair do site.
      documento.addEventListener('click', function (evento) {
        var link = evento.target.closest ? evento.target.closest(VOLTAR_PELO_HISTORICO) : null;
        if (!link) return;
        // Captura no documento: roda antes do onclick do link e o impede de rodar
        evento.preventDefault();
        evento.stopPropagation();
        voltar(link);
      }, true);

      // Esc fora de um campo devolve o foco (e o teclado) para a apresentação
      documento.addEventListener('keydown', function (evento) {
        if (evento.key !== 'Escape') return;
        if (evento.target.closest && evento.target.closest(CAMPOS)) return;
        var destino = botaoReiniciar || celular.closest('.secao');
        if (destino) destino.focus({ preventScroll: true });
      });
    }

    iframe.addEventListener('load', aoCarregar);
    aoCarregar(); // caso a primeira tela já tenha carregado antes deste script

    passos.forEach(function (botao) {
      botao.addEventListener('click', function () {
        marcar([botao]);
        abrir(botao.getAttribute('data-tela'));
      });
    });

    if (botaoReiniciar) {
      botaoReiniciar.addEventListener('click', function () {
        pilha.length = 0;
        abrir(inicio);
      });
    }
  }

  var celulares = todos('.celular');

  // Reduz o iframe de 390 × 844 para caber na altura da tela e na coluna
  function ajustarCelulares() {
    var largura = document.documentElement.clientWidth;
    var altura = window.innerHeight;
    // As reservas foram medidas com a fonte base de 16 px; o texto cresce no projetor
    var fonte = parseFloat(getComputedStyle(document.documentElement).fontSize) / 16 || 1;
    celulares.forEach(function (celular) {
      var maximo = parseFloat(celular.getAttribute('data-escala-max')) || 1;
      var borda = 20;
      var escala;
      if (telaLarga.matches) {
        var reserva = (parseFloat(celular.getAttribute('data-reserva')) || 140) * fonte;
        escala = Math.min((altura - reserva - borda) / 844, (largura * 0.3 - borda) / 390);
      } else {
        escala = Math.min((altura - 56 - 24 - borda) / 844, (largura - 32 - borda) / 390);
      }
      escala = Math.max(0.45, Math.min(maximo, escala));
      celular.style.setProperty('--s', escala.toFixed(4));
    });
  }

  celulares.forEach(prepararCelular);
  ajustarCelulares();
  window.addEventListener('resize', ajustarCelulares);
  document.addEventListener('fullscreenchange', ajustarCelulares);

  // Endereço com #secao: rola até ela depois de ajustar os celulares
  var secaoInicial = location.hash ? document.getElementById(location.hash.slice(1)) : null;
  if (secaoInicial && paradas.indexOf(secaoInicial) >= 0) secaoInicial.scrollIntoView();
  atualizarParadaAtual();
})();
