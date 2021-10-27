import { environment } from 'src/environments/environment';
export interface Conta {

  id?: number;
  pedidoId: number;
  produtoId: number;
  telefone: number;
  local: string;
  descricao: number;
  quantidade: number;
  valorProdutoUnitario: number;
  valorProdutoTotal: number;
  valorTotal: number;
  isencao: boolean;
  releaseDate: string;
  releaseTime: string;
}
