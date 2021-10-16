import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-identificacao-list',
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtos = [
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
        name: 'Coca Cola',
        imageUrl: '/assets/images/http.png',
        price: 5.00,
        code: '200200',
        preparationTime: '1 min',
        rating: 2.5
      },
      { id: 5,
        category: 'refeicao',
        name: 'Coca Cola',
        imageUrl: '/assets/images/forms.png',
        price: 5.00,
        code: '200200',
        preparationTime: '1 min',
        rating: 3
      },
      { id: 1,
        category: 'bebida',
        name: 'Peixe Cioba',
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
        name: 'Coca Cola',
        imageUrl: '/assets/images/http.png',
        price: 5.00,
        code: '200200',
        preparationTime: '1 min',
        rating: 4.5
      },
      { id: 5,
        category: 'bebida',
        name: 'Coca Cola',
        imageUrl: '/assets/images/forms.png',
        price: 5.00,
        code: '200200',
        preparationTime: '1 min',
        rating: 5
      },
      { id: 5,
        category: 'bebida',
        name: 'Coca Cola',
        imageUrl: '/assets/images/http.png',
        price: 5.00,
        code: '200200',
        preparationTime: '1 min',
        rating: 5.5
      }
    ];
  }
}
