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
  { id: 2,
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
