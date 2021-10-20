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

  changeValue(){
    this.alreadyClientChange.next(true);
  }
