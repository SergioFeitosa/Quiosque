import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrega } from './entrega';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class PedidoService {

  // tslint:disable-next-line:quotemark
  baseUrl = "http://localhost:3001/entregas";

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.baseUrl, pedido);

  }

  read(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl);

  }

  readById(pedidoId: number): Observable<Pedido> {
    const url = `${this.baseUrl}/${pedidoId}`;
    return this.http.get<Pedido>(url);
  }

}

