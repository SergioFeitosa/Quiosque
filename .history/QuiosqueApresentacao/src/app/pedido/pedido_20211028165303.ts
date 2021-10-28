export interface Pedido {

  id?: number;
  produtoId: number;
  produtoImageUrl: string;
  produtoTempoPreparacao: string;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date 
  releaseTime: string;
  entrega: boolean;
}
