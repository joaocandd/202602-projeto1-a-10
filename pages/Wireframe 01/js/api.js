/* Camada de leitura de dados fictícios, seguindo a estrutura da disciplina. */
(function () {
  async function lerJson(caminho) {
    const resposta = await fetch(caminho, { cache: 'no-store' });
    if (!resposta.ok) throw new Error(`Falha ao carregar ${caminho}: ${resposta.status}`);
    return resposta.json();
  }
  async function buscarDados(raiz = './') {
    const [clientes, faturas] = await Promise.all([
      lerJson(`${raiz}data/clientes.json`),
      lerJson(`${raiz}data/faturas.json`)
    ]);
    return { cliente: clientes[0], fatura: faturas[0] };
  }
  window.BulbeApi = { buscarDados };
})();
