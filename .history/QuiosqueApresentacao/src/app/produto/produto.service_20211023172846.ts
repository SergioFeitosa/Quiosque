import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { MatSnackBar} from '@angular'
@Injectable({
  providedIn: 'root',
})

constructor(private snackBar: MatSnackBar)
export class ProdutoService {
  retrieveAll(): Produto[] {
    return PRODUTOS;
  }

  retrieveById(id: number): Produto {
    return PRODUTOS.find((produtoIterator: Produto) => produtoIterator.id === id);
  }


}

