// trazendo o arquivo, primeiro a funçao quer sera pega e depois o caminho
import {
  renderizarProdutosCarrinho,
  atualizarPrecoCarrinho,
  inicializarCarrinho,
} from "./menuCarrinho";
import { renderizarCatalogo } from "./cartaoProduto";
import { inicializarFiltro } from "./filtroCatalogo";

// depois de importar é preciso 'ativar' a funçao
renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltro();
