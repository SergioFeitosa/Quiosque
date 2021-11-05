import { Produto } from '../produto/produto';

export interface Carrinho {

  id?: number;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  pedido: boolean;
  produto: Produto = {};
