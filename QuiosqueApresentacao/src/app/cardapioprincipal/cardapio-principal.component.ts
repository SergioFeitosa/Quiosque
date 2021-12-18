import { TelefoneConteudo } from './../telefone/telefone-conteudo';
import { TelefoneValidacaoService } from './../telefone/telefone-validacao/telefone-validacao.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CaminhoMenuComponent } from '../caminho-menu/caminho-menu.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TelefoneValidacao } from '../telefone/telefone-validacao';
@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  modulo: string;
  codigoGerado: number;
  param1: string;

  rows: TelefoneConteudo[] = [];

  telefoneConteudo = {} as TelefoneConteudo;
  telefoneValidacao = {} as TelefoneValidacao;

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean;
  telefone: number;
  codigo: number;
  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;
  element6: HTMLElement;
  element7: HTMLElement;
  element8: HTMLElement;

  constructor(private telefoneValidacaoService: TelefoneValidacaoService,
              private caminhoMenuService: CaminhoMenuComponent,
              private activatedRoute: ActivatedRoute,
    ) {
  }


  ngOnInit(): void {

    this.modulo = 'Cardápio';

    // tslint:disable-next-line:no-string-literal
    // this.param1 = this.activatedRoute.snapshot.paramMap.get('param1');


    this.param1 = this.activatedRoute.snapshot.queryParamMap.get('param1');

    if (this.activatedRoute.snapshot.queryParamMap.get('param1')) {
      environment.local = this.param1;
    } else {
      this.param1 = environment.local;
    }

    environment.fundoColoridoCardapio = true;
    environment.fundoColoridoPedido = false;
    environment.fundoColoridoCozinha = false;
    environment.fundoColoridoEntrega = false;
    environment.fundoColoridoConta = false;

    this.caminhoMenuService.ngOnInit();

    if (environment.telefone > 0 && environment.codigo > 0) {
      this.telefone = environment.telefone;
      this.codigo = environment.codigo;
      this.updateClassDisabled();
    }
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado5') as HTMLElement;
    this.element6 = document.getElementById('desabilitado6') as HTMLElement;
    this.element7 = document.getElementById('desabilitado7') as HTMLElement;
    this.element8 = document.getElementById('desabilitado8') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');
  }

  validarTelefone(): void {

    console.log('validar telefone ' + this.telefone );

    if (this.telefone > 0) {
      console.log('validar telefone dentro' );
      environment.telefone = this.telefone;
      this.enviarCodigo(Number, Number);
    }

  }

  validarCodigo(): void {

    if (this.codigo > 0) {
      environment.codigo = this.codigo;
      // tslint:disable-next-line:semicolon
      this.updateClassDisabled();
    }

  }

  enviarCodigo(telefone, codigo): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    console.log('enviar codigo xxxx' );
    this.codigoGerado = Math.random() * (9999 - 1) + 1;

    console.log('enviarCodigo yyyyy' );
    console.log('enviarCodigo 333yyyy' );


    this.telefoneValidacao.from = 'youthful-sole';
    this.telefoneValidacao.to = +telefone;

    this.telefoneConteudo.type = 'text';
    this.telefoneConteudo.text = +codigo;

    this.rows.push(this.telefoneConteudo);
    this.telefoneValidacao.contents = this.rows ;

    environment.codigo = +codigo;

    this.telefoneValidacaoService.create(this.telefoneValidacao).subscribe(() => {
      this.telefoneValidacaoService.showMessage('Codigo Enviado');
    });

    console.log('chamando create ' + this.telefoneValidacao );

    this.telefoneValidacaoService.create(this.telefoneValidacao);
  }


}
