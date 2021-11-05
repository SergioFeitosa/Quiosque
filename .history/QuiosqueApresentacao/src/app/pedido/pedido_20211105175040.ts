export interface Pedido {

  id?: number;
  produto: Produto;
  produtoNome: string;
  produtoImageUrl: string;
  produtoTempoPreparacao: string;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  entrega: boolean;
}
