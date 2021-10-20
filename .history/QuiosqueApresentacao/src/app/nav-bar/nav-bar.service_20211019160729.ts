import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NavBarService {

  
    environment.buttonDisabled = true;
    return null;
  }
}

  // tslint:disable-next-line:align
  changeValue(){
    this.alreadyClientChange.next(true);
  }
