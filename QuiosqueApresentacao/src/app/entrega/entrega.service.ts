import { Injectable } from '@angular/core';
import { Entrega } from './entrega';

@Injectable({
  providedIn: 'root',
})

export class EntregaService {
  retrieveAll(): Entrega[] {
    return PEDIDOS;
  }
}

const PEDIDOS: Entrega[] = [
  {
    entregaId: 9825512560001,
    produtoId: 1,
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
    },
  {
    entregaId: 9825512560001,
    produtoId: 2,
    observacao: 'sem pimenta',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560001,
    produtoId: 3,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560001,
    produtoId: 4,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560002,
    produtoId: 1,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560002,
    produtoId: 6,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560002,
    produtoId: 7,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560003,
    produtoId: 8,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560004,
    produtoId: 9,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    entregaId: 9825512560004,
    produtoId: 10,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  }
];
