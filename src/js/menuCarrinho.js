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

var containerItemCarrinho = document.getElementById("adicionar-carrinho");
function adicionarAoCarrinho() {
  const cartaoItemCarrinho = `<article class="flex bg-slate-100 rounded-lg p-2 relative ">
  <button class="absolute top-3 right-5">
    <i class="fa-solid fa-xmark" style="color: #000"></i>
  </button>
  <img
    src="assets/img/product-1.jpg"
    alt="imagem-carrinho"
    class="h-24"
  />
  <section id="produtos-carrinho" class="py-2">
    <p class="text-slate-900 text-sm">Casaco diamantado</p>
    <ara class="text-slate-400 text-xs">Zara</p>
    <p id="preco-total" class="text-green-700 text-lg">R$200</p>
  </section>
</article>`;
  containerItemCarrinho.innerHTML += cartaoItemCarrinho;
}
