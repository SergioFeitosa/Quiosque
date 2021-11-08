import { Produto } from '../produto/produto';

export interface Carrinho {

  id?: number;
  telefone: number;
  local: string;
  observacao: string;
  quantidade: number;
  isencao: boolean;
  releaseDate: Date;
  enviadoPedido: boolean;
  produto: Produto;
}
