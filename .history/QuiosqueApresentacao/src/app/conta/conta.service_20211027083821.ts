import { Injectable } from '@angular/core';
import { Conta } from './conta';

@Injectable({
  providedIn: 'root',
})

export class ContaService {
  retrieveAll(): Conta[] {
    return PEDIDOS;
  }
}

