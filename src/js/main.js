// trazendo o arquivo, primeiro a funçao quer sera pega e depois o caminho
import {
  renderizarProdutosCarrinho,
  atualizarPrecoCarrinho,
  inicializarCarrinho,
} from "./menuCarrinho";
import { renderizarCatalogo } from "./cartaoProduto";

// depois de importar é preciso 'ativar' a funçao
renderizarCatalogo();
renderizarProdutosCarrinho();
inicializarCarrinho();
atualizarPrecoCarrinho();
