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
  produto: [
    {
      id: 0,
      category: '',
      name: '',
      description: '',
      code: '',
      price: 0,
      imageUrl: '',
      preparationTime: '',
      rating: 0,
      releaseDate: new Date(),
      observacao: '',
      isencao: true,
      }
  ]
};
