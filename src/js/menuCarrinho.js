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

export function adicionarAoCarrinho(idproduto) {
  const produto = catalogo.find((p) => p.idproduto === idproduto);
  const containerItemCarrinho = document.getElementById("produtos-carrinho");
  const cartaoItemCarrinho = `<article class="flex bg-slate-100 rounded-lg p-2 my-5 relative ">
  <div id="espaco-item-carrinho">
            <button class="absolute top-3 right-5">
          <i class="fa-solid fa-xmark" style="color: #000"></i>
        </button>
        <img
          src="assets/img/product-1.jpg"
          alt="imagem-carrinho"
          class="h-24"
        />
            <div id="textos-item" class="py-2">
              <p class="text-slate-900 text-sm">${produto.nomeProduto}o</p>
              <ara class="text-slate-400 text-xs">Zara</p>
              <p id="preco-total" class="text-green-700 text-lg">R$200</p> 
            </div>
</article>`;
  containerItemCarrinho.innerHTML += cartaoItemCarrinho;
}
