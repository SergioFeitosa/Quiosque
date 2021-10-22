import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root',
})

export class PedidoService {
  retrieveAll(): Pedido[] {
    return PEDIDOS;
  }
}

const PEDIDOS: Pedido[] = [
  {
    pedidoId: 9825512560001,
    produtoId: 1,
    observacao: '',
    isencao: false
    },
  {
    pedidoId: 9825512560001,
    produtoId: 2,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 3,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 4,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 5,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 6,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 7,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 8,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 9,
    observacao: '',
    isencao: false
  },
  {
    pedidoId: 9825512560001,
    produtoId: 10,
    observacao: '',
    isencao: false
  }
];
