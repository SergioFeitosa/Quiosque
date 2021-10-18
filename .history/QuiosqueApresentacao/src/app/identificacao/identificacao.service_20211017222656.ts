import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})

export class IdentificacaoService {
  retrieveAll(): Produto[] {
    return PRODUTOS;
  }
}

const PRODUTOS: Produto[] = [
  {
    id: 1,
    category: 'pratododia',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 2,
    category: 'pratododia',
    name: 'File de pescada amarela',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.1,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 3,
    category: 'pratododia',
    name: 'Baião de dois',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.2,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 4,
    category: 'pratododia',
    name: 'Rubacão',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 5,
    category: 'pratododia',
    name: 'Espaguete',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.4,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 6,
    category: 'pratododia',
    name: 'Carne de sol com macaxeira',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 7,
    category: 'refeicao',
    name: 'Carne de sol com queijo coalho',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.6,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 8,
    category: 'refeicao',
    name: 'Camarão frito',
    code: 'XLF-1212',
    price: 18.00,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.7,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 9,
    category: 'refeicao',
    name: 'Filé de tilápia',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.8,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 10,
    category: 'refeicao',
    name: 'Filé de tilápia ao molho de camarão',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 1.9,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 11,
    category: 'refeicao',
    name: 'Filé de tilápia com alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 2,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 12,
    category: 'refeicao',
    name: 'Carne de sol na nata',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 2.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 13,
    category: 'refeicao',
    name: 'Brócolis com batatas gratinadas',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 14,
    category: 'refeicao',
    name: 'Berinjela recheada',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 15,
    category: 'refeicao',
    name: 'Alcatra ao molho de alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 16,
    category: 'refeicao',
    name: 'Alcatra a milanesa',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.4,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 17,
    category: 'refeicao',
    name: 'Alcatra a parmegiana',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 18,
    category: 'refeicao',
    name: 'File de frango a parmegiana',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.6,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 19,
    category: 'refeicao',
    name: 'File de frango com alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.7,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 20,
    category: 'refeicao',
    name: 'Salada especial tamanho pequeno',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.8,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 21,
    category: 'refeicao',
    name: 'Salada especial tamanho médio',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 4.9,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  { id: 22,
    category: 'bebida',
    name: 'coca cola',
    code: '100100',
    price: 70.00,
    imageUrl: '/assets/images/forms.png',
    preparationTime: '45 min',
    rating: 5,
    releaseDate: 'November 2, 2019',
    description: 'refrigerante de cola  '
  }
];
