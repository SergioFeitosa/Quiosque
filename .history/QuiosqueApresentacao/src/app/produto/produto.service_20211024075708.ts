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
    create(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(this.baseUrl, produto);
    }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  read(): Observable<Produto[]> {
    console.log('entrei service produto ' + this.baseUrl));
    return this.http.get<Produto[]>(this.baseUrl);
  }

  readById(produtoId: number): Observable<Produto> {
    const url = `${this.baseUrl}/${produtoId}`;
    return this.http.get<Produto>(url);
  }

}
