export interface Entrega {

  id?: number;
  pedidoId: number;
  telefone: number;
  local: string;
  produtoId: number;
  produtoImageUrl: string;
  observacao: string;
  isencao: boolean;
  pedidoDate: Date;
  entregaDate: Date;

}
