import { Produto } from './../produto/produto';

export interface Carrinho {

  id?: number;
  produto: Produto;
  produtoNome: string;
  produtoImageUrl: string;
  produtoTempoPreparacao: string;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  pedido: boolean;
}
