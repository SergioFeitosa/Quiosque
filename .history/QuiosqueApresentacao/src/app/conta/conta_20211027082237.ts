import { environment } from './../../environments/environment';
export class Conta {

  id?: number;
  telefone: environment.telefone,
  local: 'teste',

  produtoId: number;
  quantidade: number;
  valorProdutoUnitario: number;
  valorProdutoTotal: number;
  valorTotal: number;
  isencao: boolean;
  releaseDate: string;
  releaseTime: string;
}
