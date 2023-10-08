import {
  desenharProdutoNoCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
} from "./dados";
import { atualizarPrecoCarrinho } from "./menuCarrinho";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho");
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

function finalizarCompra(evento) {
  // preventDefault impede a ação padrão do botão de submit, ou seja de enviar o formulario ou recarregar a pagina.
  evento.preventDefault();

  //  le se tem dados, senão é enviado um objeto vazio
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }

  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };

  //   le se tem dados, senão é enviado um array vazio
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  //   aqui o pedido é adicionado ao inicio do array
  const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizados);
  apagarDoLocalStorage("carrinho");

  window.location.href = window.location.origin + "/views/pedidos.html";
  // a pagina aguarda o submit, o (evt) é um evento. e a funçao finalizar compra é chamada e será executada quanndo o envio ded formulario, objeto evt for enviado
}

document.addEventListener("submit", (evt) => finalizarCompra(evt));
desenharProdutosCheckout();
atualizarPrecoCarrinho();
