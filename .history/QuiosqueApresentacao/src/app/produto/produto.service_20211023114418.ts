import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})

export class ProdutoService {
  retrieveAll(): Produto[] {
    return PRODUTOS;
  }

  retrieveById(id: number): Produto {
    return ;
  }


}

const PRODUTOS: Produto[] = [
  {
    id: 1,
    category: 'pratododia',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/cioba-frito.jpg',
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
    imageUrl: '/assets/images/pescadaamarela.jpg',
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
    imageUrl: '/assets/images/baiaodedois2.jpg',
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
    imageUrl: '/assets/images/rubacao.jpg',
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
    imageUrl: '/assets/images/espaguete-abolonhesa.jpg',
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
    imageUrl: '/assets/images/carnedesol-commacaxeira.jpg',
    preparationTime: '45 min',
    rating: 1.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 7,
    category: 'pratododia',
    name: 'Carne de sol com queijo coalho',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/carnedesol-comqueijocoalho.jpg',
    preparationTime: '45 min',
    rating: 1.6,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 8,
    category: 'pratoregional',
    name: 'Bobó de Camarão',
    code: 'XLF-1212',
    price: 18.99,
    imageUrl: '/assets/images/camarao-bobo.jpg',
    preparationTime: '45 min',
    rating: 1.7,
    releaseDate: 'November 2, 2019',
    description: 'Prato preparado com camarão e mandioca e tempero nordestino',
  },
  {
    id: 9,
    category: 'pratoregional',
    name: 'Filé de tilápia empanado',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/tilapia-fileempanado.jpg',
    preparationTime: '45 min',
    rating: 1.8,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 10,
    category: 'pratoespecial',
    name: 'Filé de tilápia ao molho de camarão',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/tilapia-aomolhodecamarao.jpg',
    preparationTime: '45 min',
    rating: 1.9,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 11,
    category: 'pratoespecial',
    name: 'Filé de tilápia com alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/tilapia-aomolhodealcaparras.jpg',
    preparationTime: '45 min',
    rating: 2,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 12,
    category: 'pratoespecial',
    name: 'Carne de sol na nata',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/carnedesol-comnata.jpg',
    preparationTime: '45 min',
    rating: 2.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 13,
    category: 'pratoespecial',
    name: 'Brócolis com batatas gratinadas',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/brocolis-combatatagratinada.jpg',
    preparationTime: '45 min',
    rating: 3,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 14,
    category: 'porcoes',
    name: 'Berinjela recheada',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/berinjela-recheada.jpg',
    preparationTime: '45 min',
    rating: 3.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 15,
    category: 'porcoes',
    name: 'Alcatra ao molho de alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/alcatra-commolhodealcaparras.jpg',
    preparationTime: '45 min',
    rating: 4,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 16,
    category: 'porcoesespeciais',
    name: 'Alcatra a milanesa',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/alcatra-amilanesa.jpg',
    preparationTime: '45 min',
    rating: 4.4,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 17,
    category: 'porcoesespeciais',
    name: 'Alcatra a parmegiana',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/alcatra-aparmegiana.jpg',
    preparationTime: '45 min',
    rating: 4.5,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 18,
    category: 'porcoesespeciais',
    name: 'File de frango a parmegiana',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/filedefrango-aparmegiana.jpg',
    preparationTime: '45 min',
    rating: 4.6,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 19,
    category: 'porcoesespeciais',
    name: 'File de frango com alcaparras',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/filedefrango-commolhodealcaparras.jpg',
    preparationTime: '45 min',
    rating: 4.7,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 20,
    category: 'salada',
    name: 'Salada especial tamanho pequeno',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/saladaespecial-pequena.jpg',
    preparationTime: '45 min',
    rating: 4.8,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas',
  },
  {
    id: 21,
    category: 'saladaespecial',
    name: 'Salada especial tamanho médio',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: '/assets/images/saladaespecial-media.jpg',
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
    imageUrl: '/assets/images/cocacola-lata350ml.jpg',
    preparationTime: '45 min',
    rating: 5,
    releaseDate: 'November 2, 2019',
    description: 'refrigerante de cola  '
  }
];
