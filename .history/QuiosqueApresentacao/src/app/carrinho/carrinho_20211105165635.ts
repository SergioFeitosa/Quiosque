export interface Carrinho {

  id: 0,
  telefone: environment.telefone,
  local: 'teste',
  releaseDate: new Date(),
  pedido: false,
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
  