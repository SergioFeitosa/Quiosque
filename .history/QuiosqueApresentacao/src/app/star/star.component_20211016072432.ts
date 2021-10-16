import { Component, OnChanges } from '@angular/core';

@Component ({
  selector: 'app-star'
})

export class Starcomponent implements OnChanges{

  @Input()
  rating: number 
  ngOnChanges(): void {

  }
}
