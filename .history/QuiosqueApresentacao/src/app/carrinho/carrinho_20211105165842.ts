import { Produto } from "./Produto/produto";

export interface Carrinho {

  id?: number;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  pedido: boolean;
  produto: Produto {
    id?: number;
    category: string;
    name: string;
    description: string;
    code: string;
    price: number;
    imageUrl: string;
    preparationTime: string;
    rating: number;
    releaseDate: Date;
  }
  