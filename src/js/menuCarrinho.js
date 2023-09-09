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

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.idProduto === idProduto);
  const containerItemCarrinho = document.getElementById("produtos-carrinho");
  const cartaoItemCarrinho = `<article class="flex  bg-slate-100 rounded-lg p-2 my-5 relative ">
  <div id="espaco-item-carrinho" class="flex flex-row w-full ">
            <button class="absolute top-3 right-5">
          <i class="fa-solid fa-xmark" style="color: #000"></i>
        </button>
        <img
          src="assets/img/${produto.nomeArquivoImagem}"
          alt="imagem-carrinho"
          class="h-24"
        />
            <div id="textos-item" class="p-2">
              <p class="text-slate-900 text-sm">${produto.nomeProduto}o</p>
              <p class="text-slate-400 text-xs">${produto.marcaProduto}</p>
              <p id="preco-total" class="text-green-700 text-lg">R$${produto.precoProduto}</p> 
            </div>
  </div>
</article>`;
  containerItemCarrinho.innerHTML += cartaoItemCarrinho;
}
