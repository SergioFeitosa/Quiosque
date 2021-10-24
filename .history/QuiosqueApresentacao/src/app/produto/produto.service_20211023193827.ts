import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})

export class ProdutoService {

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) {

  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  retrieveAll(): Produto[] {
    return products;
  }

  retrieveById(id: number): Produto {
    return PRODUTOS.find((produtoIterator: Produto) => produtoIterator.id === id);
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);


}

