export class Conta {

  id?: number;
  pedidoId: number;
  produtoId: number;
  telefone: number;
  local: string;
  nome: string;
  descricao: string;
  imageUrl: string;
  quantidade: number;
  valorProdutoUnitario: number;
  valorProdutoTotal: number;
  valorTotal: number;
  isencao: boolean;
  releaseDate: Date;
  releaseTime: string;
}
