import { Produto } from '../produto/produto';

export interface Pedido {

  id?: number;
  produto: Produto;
  telefone: number;
  quantidade: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  enviadoEntrega: boolean;
}