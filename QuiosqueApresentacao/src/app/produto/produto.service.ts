import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})

export class ProdutoService {

  // tslint:disable-next-line:quotemark
  // baseUrl = "http://localhost:3001/products";

  baseUrl = 'https://springboot-postgresheroku.herokuapp.com/api/v1/products';

  httpOptions = {
    headers: new HttpHeaders({

      // tslint:disable-next-line:object-literal-key-quotes
      'Access-Control-Allow-Origin': 'https://www.sgpn.com.br',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })

  };

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
      verticalPosition: 'top',
      panelClass: ['custom-css-class']
    });
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl, this.httpOptions);

  }

  readById(produtoId: number): Observable<Produto> {
    const url = `${this.baseUrl}/${produtoId}`;
    return this.http.get<Produto>(url);
  }

}
