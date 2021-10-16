import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PRODUTOS: Produto[] = [

  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'November 2, 2019',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
  },
  { id: 1,
    category: 'refeicao',
    name: 'Peixe Cioba',
    imageUrl: '/assets/images/forms.png',
    price: 70.00,
    code: '100100',
    preparationTime: '45 min',
    rating: 1
  },
  { id: 2,
    category: 'refeicao',
    name: 'File de pescada amarela',
    imageUrl: '/assets/images/http.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 1.5
  },
  { id: 3,
    category: 'refeicao',
    name: 'Baião de dois',
    imageUrl: '/assets/images/forms.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 2
  },
  { id: 4,
    category: 'refeicao',
    name: 'Feijoada',
    imageUrl: '/assets/images/http.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 2.5
  },
  { id: 5,
    category: 'refeicao',
    name: 'Rubacão',
    imageUrl: '/assets/images/forms.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 3
  },
  { id: 1,
    category: 'bebida',
    name: 'Cerveja',
    imageUrl: '/assets/images/http.png',
    price: 70.00,
    code: '100100',
    preparationTime: '45 min',
    rating: 3.5
  },
  { id: 2,
    category: 'bebida',
    name: 'Coca Cola',
    imageUrl: '/assets/images/forms.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 4
  },
  { id: 3,
    category: 'bebida',
    name: 'Suco',
    imageUrl: '/assets/images/http.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 4.5
  },
  { id: 5,
    category: 'bebida',
    name: 'Vodka',
    imageUrl: '/assets/images/forms.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 5
  },
  { id: 5,
    category: 'bebida',
    name: 'Caipiroska',
    imageUrl: '/assets/images/http.png',
    price: 5.00,
    code: '200200',
    preparationTime: '1 min',
    rating: 5.5
  }
];
}




  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'November 4, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'November 8, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'November 16, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'November 25, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
  }
];
