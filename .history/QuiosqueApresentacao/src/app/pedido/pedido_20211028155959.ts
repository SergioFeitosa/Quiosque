export interface Pedido {

  id?: number;
  produtoId: number;
  produtoImageUrl: string;
  produtoTempoPreparacao: string;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: string;
  releaseTime: string;
  entrega: boolean;
}
