import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PRODUTOS: Produto[] = [

  {
    id: 1,
    category: 'refeicao',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 2,
    category: 'refeicao',
    name: 'File de pescada amarela',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 3,
    category: 'refeicao',
    name: 'Baião de dois',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 4,
    category: 'refeicao',
    name: 'Rubacão',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 5,
    category: 'refeicao',
    name: 'Espaguete',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 6,
    category: 'refeicao',
    name: 'Carne de sol com macaxeira',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
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
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 8,
    category: 'refeicao',
    name: 'Camarão frito',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
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
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 18,
    category: 'refeicao',
    name: 'File de fran',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 19,
    category: 'refeicao',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 20,
    category: 'refeicao',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 21,
    category: 'refeicao',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  { id: 22,
    category: 'refeicao',
    name: 'File de pescada amarela',
    code: '100100',
    price: 70.00,
    imageUrl: '/assets/images/forms.png',
    preparationTime: '45 min',
    rating: 1,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino.  '
  }
];
