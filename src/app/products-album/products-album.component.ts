import { Component, OnInit } from '@angular/core';
import { ProductsAlbumService } from '../services/products-album.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-products-album',
  templateUrl: './products-album.component.html',
  styleUrls: ['./products-album.component.scss']
})
export class ProductsAlbumComponent implements OnInit {
  products:any[]=[]

  constructor(private productsAlbumService:ProductsAlbumService) {

  }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.productsAlbumService.productsSubject.subscribe(res=>{
      this.products = <any>res;

    })
  }

  getProductImage(product:any){
    if(product)
    return of( `../../assets/${product?.colors[Math.floor(Math.random() * product?.colors.length)].images[0]}`)
    else
    return of('')
  }


}
