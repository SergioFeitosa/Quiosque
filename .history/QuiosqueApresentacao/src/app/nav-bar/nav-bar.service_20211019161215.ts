import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NavBarService {
}


// tslint:disable-next-line:typedef
function changeValue() {
  throw new Error('Function not implemented.');
  environment.buttonDisabled = false;
}

