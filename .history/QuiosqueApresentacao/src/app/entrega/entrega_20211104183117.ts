export interface Entrega {

  id?: number;
  pedidoId: number;
  telefone: number;
  local: string;
  produtoId: number;
  produtoImageUrl: string;
  produtoNome: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entregaDate: Date;
}
