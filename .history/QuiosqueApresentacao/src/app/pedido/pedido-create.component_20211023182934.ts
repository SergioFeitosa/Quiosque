import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  templateUrl: './pedido-list.component.html',
})

export class PedidoListComponent implements OnInit {
