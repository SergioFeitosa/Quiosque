import { Injectable } from '@angular/core';
import { Entrega } from './entrega';

@Injectable({
  providedIn: 'root',
})

export class EntregaService {
  retrieveAll(): Entrega[] {
    return PEDIDOS;
  }
}

