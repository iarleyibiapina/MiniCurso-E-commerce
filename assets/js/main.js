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

const catalogoProduto = [produtoUm, produtoDois, produtoTres];

// string templates

// agora com o catalogo
// percorrendo cada produto
for (const produtoDoCatalogo of catalogoProduto) {
  const cartaoProdutoCatalogo = `
<div id="item-product" class="card-product">
<img
  src="assets/img/${produtoDoCatalogo.nomeArquivoImagem}"
  alt="imagem produto 1"
  style="height: 200px"
/>
<p><strong>${produtoDoCatalogo.marcaProduto}</strong></p>
<p>${produtoDoCatalogo.nomeProduto}</p>
<p>$${produtoDoCatalogo.precoProduto}</p>
<button onclick="alert('Adicionado')">Adicionar ao carrinho.</button>
</div>
`;
  document.getElementById("product-area").innerHTML += cartaoProdutoCatalogo;
}
