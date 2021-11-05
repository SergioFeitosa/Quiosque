import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';

export interface Entrega {

  id?: number;
  entregaDate: Date;
  pedido: Pedido;
}
