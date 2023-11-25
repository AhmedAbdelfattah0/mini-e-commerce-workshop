import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-identification',
  templateUrl: './product-identification.component.html',
  styleUrls: ['./product-identification.component.scss']
})
export class ProductIdentificationComponent implements OnInit {
@Input() productDetails:any={}
@Input() selectedImageIndex:number=0;
@Input() imagesListInput:string[] =[]
@Output() selectImageEvent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  selectImage(index:number,image:any){
    let obj={'index':index,'image':image}
    this.selectImageEvent.emit(obj)
  }
}
