import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrinho } from './carrinho';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {

  // tslint:disable-next-line:quotemark
  baseUrl = "http://localhost:3001/carrinhos";

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      color: 'yello'
    });
  }

  create(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.post<Carrinho>(this.baseUrl, carrinho);

  }

  update(carrinho: Carrinho): Observable<Carrinho>{
    const url = `${this.baseUrl}/${carrinho.id}`;
    return this.http.put<Carrinho>(url, carrinho);

  }

  read(): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>(this.baseUrl);

  }

  readById(carrinhoId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.get<Carrinho>(url);
  }

  delete(carrinhoId: number): Observable<Carrinho> {
    const url = `${this.baseUrl}/${carrinhoId}`;
    return this.http.delete<Carrinho>(url);
  }

}

