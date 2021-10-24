import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pedido-list.component.html',
})

export class PedidoListComponent implements OnInit {
