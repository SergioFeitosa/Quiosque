import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';

export interface Entrega {

  id?: number;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entregaDate: Date;
  produto: Produto;
  pedido: Pedido;
}
