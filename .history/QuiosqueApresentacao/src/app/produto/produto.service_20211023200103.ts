import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})

export class ProdutoService {

  // tslint:disable-next-line:quotemark
  baseUrl = "http://localhost:3001/products";


  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {

  }

    // tslint:disable-next-line:typedef
    create(pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(this.baseUrl, pedido);
    }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);

  }
}
