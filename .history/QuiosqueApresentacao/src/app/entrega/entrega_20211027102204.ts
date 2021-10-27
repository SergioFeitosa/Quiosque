export interface Entrega {

  id?: number;
  pedidoId: number;
  telefone: number;
  local: string;
  produtoId: number;
  observacao: string;
  isencao: boolean;
  releaseDate: string;
  releaseTime: string;
  entregaTime: string;
  produtoImageUrl: string;

}
