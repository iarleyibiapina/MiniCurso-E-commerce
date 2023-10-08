export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export const catalogo = [
  {
    idProduto: "1",
    nomeProduto: "Casaco Diamantado",
    marcaProduto: "Zara",
    precoProduto: 249.99,
    nomeArquivoImagem: "product-1.jpg",
    feminino: true,
  },
  {
    idProduto: "2",
    nomeProduto: "Pele de Onça",
    marcaProduto: "Amell",
    precoProduto: 300.0,
    nomeArquivoImagem: "product-2.jpg",
    feminino: true,
  },
  {
    idProduto: "3",
    nomeProduto: "Pele de jacarré",
    marcaProduto: "Lacoste",
    precoProduto: 350.0,
    nomeArquivoImagem: "product-3.jpg",
    feminino: true,
  },
  {
    idProduto: "4",
    nomeProduto: "Bolsa",
    marcaProduto: "zent",
    precoProduto: 999.0,
    nomeArquivoImagem: "product-4.jpg",
    feminino: false,
  },
  {
    idProduto: "5",
    nomeProduto: "joia dagua",
    marcaProduto: "lol",
    precoProduto: 100.0,
    nomeArquivoImagem: "product-5.jpg",
    feminino: false,
  },
  {
    idProduto: "6",
    nomeProduto: "Camisa Polo",
    marcaProduto: "Boss",
    precoProduto: 1000.0,
    nomeArquivoImagem: "product-6.jpg",
    feminino: true,
  },
  {
    idProduto: "7",
    nomeProduto: "Overshirt naus",
    marcaProduto: "Dior",
    precoProduto: 450,
    nomeArquivoImagem: "product-7.jpg",
    feminino: false,
  },
  {
    idProduto: "8",
    nomeProduto: "Jaqueta Canguru",
    marcaProduto: "Gucci",
    precoProduto: 599.9,
    nomeArquivoImagem: "product-8.jpg",
    feminino: false,
  },
];

export const catalogoBolsa = [
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

export function desenharProdutoNoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.idProduto === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  // separando article
  // cria tag article
  const elementoArticle = document.createElement("article");
  // cria classes para a tag
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoItemCarrinho = `
  <div id="espaco-item-carrinho" class="flex flex-row w-full ">
  <img
  src="../assets/img/${produto.nomeArquivoImagem}"
  alt="imagem-carrinho"
  class="h-24"
  />
  <div id="textos-item" class="p-2 flex flex-col justify-between">
  <p class="text-slate-900 text-sm">${produto.nomeProduto}o</p>
  <p class="text-slate-400 text-xs">${produto.marcaProduto}</p>
  <p id="preco-item" class="text-green-700 text-lg">R$${produto.precoProduto}</p> 
            </div>
            <div class="flex text-slate-950 items-end absolute bottom-0 right-4 text-lg'">
            <p id="quantidade-${produto.idProduto}" class="ml-1">${quantidadeProduto}</p>
            </div>
            </div>
            `;
  // tira os btns de - e +, tira do o botao de excluir
  elementoArticle.innerHTML = cartaoItemCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
