export interface Carrinho {

  id?: number;
  produtoId: number;
  produtoNome: string;
  produtoImageUrl: string;
  produtoTempoPreparacao: string;
  telefone: number;
  local: string;
  observacao: string;
  isencao: boolean;
  releaseDate: Date;
  pedido: boolean;
}
carrinhoArray: any = {

  id: 0,
  telefone: environment.telefone,
  local: 'teste',
  releaseDate: new Date(),
  pedido: false,
  export interface Produto {

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
  