import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class PedidoService {

  baseUrl = "http://localhost:3001/pedidos";

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

