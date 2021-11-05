import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';

export interface Entrega {

  id?: number;
  releaseDate: Date;
  entregaDate: Date;
  produto: Produto;
  pedido: Pedido;
}
