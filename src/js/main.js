// criando objeto que sera cada produto
const produtoUm = {
  idProduto: 1,
  nomeProduto: "Casaco Diamantado",
  marcaProduto: "Zara",
  precoProduto: 249.99,
  nomeArquivoImagem: "product-1.jpg",
};
const produtoDois = {
  idProduto: 2,
  nomeProduto: "Pele de Onça",
  marcaProduto: "Amell",
  precoProduto: 300.0,
  nomeArquivoImagem: "product-2.jpg",
};
const produtoTres = {
  idProduto: 3,
  nomeProduto: "Pela de jacarré",
  marcaProduto: "Lacoste",
  precoProduto: 350.0,
  nomeArquivoImagem: "product-3.jpg",
};
const produtoQuatro = {
  idProduto: 4,
  nomeProduto: "Bolsa",
  marcaProduto: "zent",
  precoProduto: 999.0,
  nomeArquivoImagem: "product-4.jpg",
};
const produtoCinco = {
  idProduto: 5,
  nomeProduto: "joia dagua",
  marcaProduto: "lol",
  precoProduto: 100.0,
  nomeArquivoImagem: "product-5.jpg",
};

const catalogoProduto = [
  produtoUm,
  produtoDois,
  produtoTres,
  produtoQuatro,
  produtoCinco,
];

// string templates

// agora com o catalogo
// percorrendo cada produto
for (const produtoDoCatalogo of catalogoProduto) {
  const cartaoProdutoCatalogo = `
<div id="item-product-${produtoDoCatalogo.idProduto}" class="border-solid border-2 border-sky-500 w-48 p-2 m-2">
<img
  class="w-auto"
  src="assets/img/${produtoDoCatalogo.nomeArquivoImagem}"
  alt="imagem produto 1"
  style="height: 240px"
/>
<div id="legend">
<p><strong>${produtoDoCatalogo.marcaProduto}</strong></p>
<p>${produtoDoCatalogo.nomeProduto}</p>
<p>$${produtoDoCatalogo.precoProduto}</p>
<button onclick="alert('Adicionado')">Adicionar ao carrinho.</button>
</div>
</div>
`;
  document.getElementById("product-area").innerHTML += cartaoProdutoCatalogo;
}
