import { catalogo } from "./dados";
import { adicionarAoCarrinho } from "./menuCarrinho";

// string templates
// agora com o catalogo
// percorrendo cada produto
export function renderizarCatalogo() {
  for (const produtoDoCatalogo of catalogo) {
    // cria classe, é feminino? caso sim : caso nao;
    const cartaoProdutoCatalogo = `
  <div id="item-product-${
    produtoDoCatalogo.idProduto
  }" class="border-solid shadow-xl shadow-slate-400 rounded-lg w-48 p-2 m-2 flex flex-col justify-between group ${
      produtoDoCatalogo.feminino ? "feminino" : "masculino"
    }">
  <img
    class="group-hover:scale-110 duration-300 my-3 rounded-lg"
    src="assets/img/${produtoDoCatalogo.nomeArquivoImagem}"
    alt="imagem produto 1"
  />
  <div id="legend">
  <p class="text-lg my-3"><strong>${produtoDoCatalogo.nomeProduto}</strong></p>
  <p class="text-sm">${produtoDoCatalogo.marcaProduto}</p>
  <p class="text-base">$${produtoDoCatalogo.precoProduto}</p>
  <button id="adicionar-${
    produtoDoCatalogo.idProduto
  }" class=" bg-slate-950 hover:bg-slate-500 text-slate-200 rounded-lg w-full" onclick="alert('Adicionado')" title="Adicionar ao carrinho."><i class="fa-solid fa-cart-plus"></i></button>
  </div>
  </div>
  `;
    document.getElementById("product-area").innerHTML += cartaoProdutoCatalogo;
  }

  for (const produtoDoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoDoCatalogo.idProduto}`)
      .addEventListener("click", () =>
        adicionarAoCarrinho(produtoDoCatalogo.idProduto)
      );
  }
}
