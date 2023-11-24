import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
  }
  get stars() {
    if(this.rating)
    return Array(Math.floor(this.rating)).fill(0);
    return[]
  }
}
