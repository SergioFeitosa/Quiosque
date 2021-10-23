import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;
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

  constructor(private cardapioPrincipalComponent: CardapioPrincipalComponent,
    private navBarService: NavBarService) {
    this.buttonDisabled = false;
  }


  ngOnInit(): void {

    if (!this.buttonDisabled) {
      this.buttonDisabled = false;
      if (this.telefone > 0 && this.codigo > 0) {
        console.log('carregando vazio');
      }
    }
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    console.log('passei23333 ' + this.buttonDisabled);

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

  if(this.telefone > 0) {
  this.buttonHide = false;
} else {
  this.buttonHide = true;
}

}

validarCodigo(): void {

  if(this.codigo > 0) {
  // tslint:disable-next-line:semicolon
  this.cardapioPrincipalComponent.updateClassDisabled();
}

}

enviarCodigo(): void {
  // tslint:disable-next-line:comment-format
  //const telefone = this.navForm.get('telefone').value;
  const codigoGerado = Math.random() * this.telefone;
  this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());