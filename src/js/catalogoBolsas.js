import { inicializarCarrinho } from "./menuCarrinho";
import { catalogoBolsa } from "./dados";

inicializarCarrinho();

for (const produtoDoCatalogoBolsa of catalogoBolsa) {
  let sexo;
  if (produtoDoCatalogoBolsa.masculino) {
    sexo = "masculino";
  } else {
    sexo = "feminino";
  }
  const cartaoProdutoCatalogoBolsa = `
  <div id="item-product-${produtoDoCatalogoBolsa.id}" class="border-solid border-2 border-sky-500 w-48 p-3 h-auto">
  <p><strong>${produtoDoCatalogoBolsa.nome}</strong></p>
  <p>${produtoDoCatalogoBolsa.cor}</p>
  <p>$${sexo}</p>
  <button class="bg-slate-200 text-slate-900" onclick="alert('Adicionado')">Adicionar ao carrinho.</button>
  </div>
  `;
  document.getElementById("product-area").innerHTML +=
    cartaoProdutoCatalogoBolsa;
}
