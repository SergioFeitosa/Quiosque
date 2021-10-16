import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  s: './star.component.html',
})

export class StarComponent implements OnChanges{

  @Input()
  rating: number;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 94 / 5;
  }
}
