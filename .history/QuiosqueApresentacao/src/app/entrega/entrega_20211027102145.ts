export interface Entrega {

  id
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
