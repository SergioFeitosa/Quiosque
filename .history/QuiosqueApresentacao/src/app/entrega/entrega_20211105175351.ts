import { Produto } from '../produto/produto';

export interface Entrega {

  id?: number;
  pedidoId: number;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entregaDate: Date;
  produto: Produto;
  produto: Produto;
}
