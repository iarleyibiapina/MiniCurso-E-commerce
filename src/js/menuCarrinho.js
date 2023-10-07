import { lerLocalStorage, salvarLocalStorage, catalogo } from "./dados";
// quantidade de itens
// operador ?? fornece valor padrao caso o valor a esquerda seja nulo. ou seja se o local storage estiver vazio, vai definir um objeto.
const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

// assim pode ser reutilizado
export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const btnIrParaCheckout = document.getElementById("finalizar-compra");

  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  btnIrParaCheckout.addEventListener("click", irParaCheckout);
}
function incrementarQuantidadeProdutoCarrinho(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarInformacaoQuantidade(idProduto);
  atualizarPrecoCarrinho();
}
function decrementarQuantidadeProdutoCarrinho(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarInformacaoQuantidade(idProduto);
  atualizarPrecoCarrinho();
}
function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  renderizarProdutosCarrinho();
  atualizarPrecoCarrinho();
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProdutoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  desenharProdutoNoCarrinho(idProduto);
}

export function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.idProduto === idProduto);
  const containerItemCarrinho = document.getElementById("produtos-carrinho");

  // separando article
  // cria tag article
  const elementoArticle = document.createElement("article");
  // cria classes para a tag
  const articleClasses = [
    "flex",
    "bg-slate-200",
    "rounded-lg",
    "p-2",
    "my-5",
    "relative",
  ];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoItemCarrinho = `
  <div id="espaco-item-carrinho" class="flex flex-row w-full ">
  <button id="remover-item-${produto.idProduto}" class="absolute top-3 right-5">
  <i class="fa-solid fa-xmark" style="color: #000"></i>
  </button>
  <img
  src="assets/img/${produto.nomeArquivoImagem}"
  alt="imagem-carrinho"
  class="h-24"
  />
  <div id="textos-item" class="p-2 flex flex-col justify-between">
  <p class="text-slate-900 text-sm">${produto.nomeProduto}o</p>
  <p class="text-slate-400 text-xs">${produto.marcaProduto}</p>
  <p id="preco-item" class="text-green-700 text-lg">R$${
    produto.precoProduto
  }</p> 
            </div>
            <div class="flex text-slate-950 items-end absolute bottom-0 right-4 text-lg'">
            <button id="decrementar-carrinho-${produto.idProduto}">-</button>
            <p id="quantidade-${produto.idProduto}" class="ml-1">${
    idsProdutoCarrinhoComQuantidade[produto.idProduto]
  }</p>
            <button id="incrementar-carrinho-${
              produto.idProduto
            }" class="ml-1">+</button>
            </div>
            </div>
            `;
  elementoArticle.innerHTML = cartaoItemCarrinho;
  containerItemCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`incrementar-carrinho-${produto.idProduto}`)
    .addEventListener("click", () =>
      incrementarQuantidadeProdutoCarrinho(produto.idProduto)
    );
  document
    .getElementById(`decrementar-carrinho-${produto.idProduto}`)
    .addEventListener("click", () =>
      decrementarQuantidadeProdutoCarrinho(produto.idProduto)
    );

  document
    .getElementById(`remover-item-${produto.idProduto}`)
    .addEventListener("click", () => removerDoCarrinho(produto.idProduto));
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  //percorre vendo os ids dos produtos e sua quantidade
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      // procurando nos dados do catalogo o id queidProdutoNoCarrinho ao id do produto no carrinho
      // procura o preço pelo id e multiplica pela quantidade no carrinho
      catalogo.find((p) => p.idProduto === idProdutoNoCarrinho).precoProduto *
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`;
}

export function renderizarProdutosCarrinho() {
  atualizarPrecoCarrinho();
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

function irParaCheckout() {
  // veririfica pelos ids do carrinho, se está vazio, pega o tamanho do array que seria cada item no carrinho. se estiver vazio ele retorna.
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  // pega a url atual e adiciona este codigo no final.
  window.location.href = window.location.origin + "/views/checkout.html";
}
