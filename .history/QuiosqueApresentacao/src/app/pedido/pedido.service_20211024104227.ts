import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class PedidoService {

  // tslint:disable-next-line:quotemark
  baseUrl = "http://localhost:3001/pedidos";

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  // tslint:disable-next-line:typedef
  create(pedido: Pedido) {
    return this.http.post(this.baseUrl, pedido);

  }

  read(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl);

  }

  readById(pedidoId: number): Observable<Pedido> {
    const url = `${this.baseUrl}/${pedidoId}`;
    return this.http.get<Pedido>(url);
  }


}

