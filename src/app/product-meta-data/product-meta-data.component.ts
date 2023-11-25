import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-meta-data',
  templateUrl: './product-meta-data.component.html',
  styleUrls: ['./product-meta-data.component.scss']
})
export class ProductMetaDataComponent implements OnInit {
  selectedSizeIndex: number=0;
  @Output() selectedColorEvent:EventEmitter<any> = new EventEmitter()
  selectedColorIndex: number=0;
  @Input() productDetails:any={}

  constructor() { }

  ngOnInit(): void {
  }

  selectedSize(index: number) {
    this.selectedSizeIndex = index;
  }

  selectedColor(index:number){
    this.selectedColorIndex=index;
this.selectedColorEvent.emit(index)
  }
}
