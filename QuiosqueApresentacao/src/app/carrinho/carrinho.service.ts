import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrinho } from './carrinho';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {}

  // tslint:disable-next-line:quotemark
  // baseUrl = "http://localhost:3001/carrinhos";

  baseUrl = 'https://springboot-postgresheroku.herokuapp.com/api/v1/carts';

  httpOptions = {
    headers: new HttpHeaders({

      // tslint:disable-next-line:object-literal-key-quotes
      'Access-Control-Allow-Origin': 'https://www.sgpn.com.br',
      'Access-Control-Allow-Headers': 'Authorization, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',

    })
  };
  // tslint:disable-next-line:variable-name
  private _listners = new Subject<any>();

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['custom-css-class']
    });
  }

  create(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.post<Carrinho>(this.baseUrl, carrinho, this.httpOptions);

  }

  update(carrinho: Carrinho): Observable<Carrinho>{
    const url = `${this.baseUrl}/${carrinho.id}`;
    return this.http.put<Carrinho>(url, carrinho, this.httpOptions);

  }

  read(): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>(this.baseUrl, this.httpOptions);

  }

  readById(carrinhoId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.get<Carrinho>(url, this.httpOptions);
  }

  delete(carrinhoId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.delete<Carrinho>(url, this.httpOptions);
  }

}

