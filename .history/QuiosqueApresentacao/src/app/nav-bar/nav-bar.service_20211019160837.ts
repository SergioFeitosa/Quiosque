import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NavBarService {

}

function changeValue() {
  throw new Error('Function not implemented.');
  environment.buttonDisabled = true;
}

