import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';

export interface Entrega {

  id?: number;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entregaDate: Date;
  produto: Produto;
  pedido: Pedido;
}
