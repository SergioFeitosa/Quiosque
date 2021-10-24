import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})

export class ProdutoService {

  constructor(private snackBar: MatSnackBar) {

  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration
    })
  }

  retrieveAll(): Produto[] {
    return PRODUTOS;
  }

  retrieveById(id: number): Produto {
    return PRODUTOS.find((produtoIterator: Produto) => produtoIterator.id === id);
  }


}

