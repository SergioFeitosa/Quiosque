import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})

constructor
export class ProdutoService {
  retrieveAll(): Produto[] {
    return PRODUTOS;
  }

  retrieveById(id: number): Produto {
    return PRODUTOS.find((produtoIterator: Produto) => produtoIterator.id === id);
  }


}

