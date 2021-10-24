import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styles: './pedido-create.component.html',
})

export class PedidoCreateComponent implements OnInit {
