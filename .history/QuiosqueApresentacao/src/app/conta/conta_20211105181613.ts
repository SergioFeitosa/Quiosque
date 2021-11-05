import { Pedido } from "../pedido/pedido";

export class Conta {

  id?: number;
  pedido: Pedido;
  quantidade: number;
  valorProdutoUnitario: number;
  valorProdutoTotal: number;
  valorTotal: number;
  isencao: boolean;
  releaseDate: Date;
  releaseTime: string;
}
