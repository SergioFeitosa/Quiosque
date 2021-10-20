
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NavBarService {

    environment.buttonDisabled = true
    return null;
  }
}

alreadyClientChange: Subject<boolean> = new Subject<boolean>();

  changeValue(){
    this.alreadyClientChange.next(true);
  }
