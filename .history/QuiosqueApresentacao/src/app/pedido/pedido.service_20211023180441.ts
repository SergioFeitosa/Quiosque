import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class PedidoService {

  baseUrl =

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {}

  create(pedido: Pedido) {
    return
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  retrieveAll(): Pedido[] {
    return PEDIDOS;
  }
}

const PEDIDOS: Pedido[] = [
  {
    pedidoId: 9825512560001,
    produtoId: 1,
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
    },
  {
    pedidoId: 9825512560001,
    produtoId: 2,
    observacao: 'sem pimenta',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560001,
    produtoId: 3,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560001,
    produtoId: 4,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560002,
    produtoId: 1,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560002,
    produtoId: 6,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560002,
    produtoId: 7,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560003,
    produtoId: 8,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560004,
    produtoId: 9,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  },
  {
    pedidoId: 9825512560004,
    produtoId: 10,
    observacao: '',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  }
];
