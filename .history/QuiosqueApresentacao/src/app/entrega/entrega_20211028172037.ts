export interface Entrega {

  id?: number;
  pedidoId: number;
  telefone: number;
  local: string;
  produtoId: number;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entregaDate: Date;
  produtoImageUrl: string;

}