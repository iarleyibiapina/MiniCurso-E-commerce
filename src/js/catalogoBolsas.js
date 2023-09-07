// outra forma de fazer
const catalogoBolsas = [
  {
    id: 1,
    nome: "Bolsa com alça",
    cor: "Vermelha",
    masculino: false,
  },
  {
    id: 2,
    nome: "Bolsa sem alça",
    cor: "Azul",
    masculino: true,
  },
];

for (const produtoDoCatalogoBolsa of catalogoBolsas) {
  let sexo;
  if (produtoDoCatalogoBolsa.masculino) {
    sexo = "masculino";
  } else {
    sexo = "feminino";
  }
  console.log(sexo);
  const cartaoProdutoCatalogo = `
  <div id="item-product" class="card-product">
  <p><strong>${produtoDoCatalogoBolsa.nome}</strong></p>
  <p>${produtoDoCatalogoBolsa.cor}</p>
  <p>$${sexo}</p>
  <button onclick="alert('Adicionado')">Adicionar ao carrinho.</button>
  </div>
  `;
  document.getElementById("product-area").innerHTML += cartaoProdutoCatalogo;
}
