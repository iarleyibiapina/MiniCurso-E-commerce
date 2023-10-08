import { lerLocalStorage, desenharProdutoNoCarrinhoSimples } from "./dados";

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `<p class='text-xl my-4 text-bold'>${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
  <section id='container-pedidos-${
    pedidoComData.dataPedido
  }' class='bg-slate-300 p-3 rounded-md'></section>`;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoNoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

renderizarHistoricoPedidos();
