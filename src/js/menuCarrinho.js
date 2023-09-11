import { catalogo } from "./dados";

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

  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
}

// quantidade de itens
const idsProdutoCarrinhoComQuantidade = [];
function incrementarQuantidadeProdutoCarrinho(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto);
}
function decrementarQuantidadeProdutoCarrinho(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto);
}
function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerHTML =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  renderizarProdutosCarrinho();
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProdutoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
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
  <p id="preco-total" class="text-green-700 text-lg">R$${
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

function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}
