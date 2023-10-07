const catalogoProdutos = document.getElementById("product-area");

function esconderMasculino() {
  exibirTodos();
  const produtosMasculino = Array.from(
    catalogoProdutos.getElementsByClassName("masculino")
  );
  for (const produto of produtosMasculino) {
    produto.classList.add("hidden");
  }
}

function esconderFeminino() {
  exibirTodos();
  console.log("esconderMasculinos");
  const produtosFeminino = Array.from(
    catalogoProdutos.getElementsByClassName("feminino")
  );
  for (const produto of produtosFeminino) {
    produto.classList.add("hidden");
  }
}

function exibirTodos() {
  const produtosEscondido = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );
  for (const produto of produtosEscondido) {
    produto.classList.remove("hidden");
  }
}

export function inicializarFiltro() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-feminino")
    .addEventListener("click", esconderMasculino);
  document
    .getElementById("exibir-masculino")
    .addEventListener("click", esconderFeminino);
}
