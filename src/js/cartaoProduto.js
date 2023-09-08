import { catalogo } from "./dados";

// string templates
// agora com o catalogo
// percorrendo cada produto
export function renderizarCatalogo() {
  for (const produtoDoCatalogo of catalogo) {
    const cartaoProdutoCatalogo = `
  <div id="item-product-${produtoDoCatalogo.idProduto}" class="border-solid border-2 border-sky-500 w-48 p-2 m-2">
  <img
    class="w-48"
    src="assets/img/${produtoDoCatalogo.nomeArquivoImagem}"
    alt="imagem produto 1"
    style="height: 240px"
  />
  <div id="legend">
  <p><strong>${produtoDoCatalogo.marcaProduto}</strong></p>
  <p>${produtoDoCatalogo.nomeProduto}</p>
  <p>$${produtoDoCatalogo.precoProduto}</p>
  <button class="bg-slate-200 text-slate-900" onclick="alert('Adicionado')">Adicionar ao carrinho.</button>
  </div>
  </div>
  `;
    document.getElementById("product-area").innerHTML += cartaoProdutoCatalogo;
  }
}
