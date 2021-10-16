import { Component, OnChanges, Input } from '@angular/core';

@Component ({
  selector: 'app-star'
})

export class Starcomponent implements OnChanges{

  @Input()
  rating: number =0;
  star

  ngOnChanges(): void {

  }
}
