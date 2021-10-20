
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class IdentificacaoService {
  retrieveAll(): Produto[] {
    return PRODUTOS;
  }
}

alreadyClientChange: Subject<boolean> = new Subject<boolean>();

  changeValue(){
    this.alreadyClientChange.next(true);
  }
