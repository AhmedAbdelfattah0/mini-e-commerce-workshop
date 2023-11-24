import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { ProductsAlbumService } from '../services/products-album.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  products: any[] = [];
  productDetails: any = {};
  productId: any = '';
  selectedImageIndex: number = 0;
  selectedSizeIndex: number = 0;
  selectedImage: any;
  selectedColorIndex: number=0;
  imagesList:BehaviorSubject<string[]>= new BehaviorSubject<string[]>([])

  constructor(
    private productsAlbumService: ProductsAlbumService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((res: any) => {
      if (res['params'].id) {
        this.productId = res;
        this.productId = this.productId.params.id;
         this.getProducts();

      }
    });
  }

  getProducts() {
    this.productsAlbumService.productsSubject.subscribe((res) => {
      console.log(res);
      this.products = <any>res;
      if (this.products.length){
        this.productDetails = this.products.find((prod) =>prod.id == this.productId)|| {};
      console.log(this.productDetails);
      this.selectedColor(0)
      }

    });
  }

  getProductImage(images: any) {
    if (images && images.length)
      return images.map((images: any) => {
        return `../../assets/${images}`;
      });
    else return [];
  }

  selectImage(index: number, image: any) {
    this.selectedImageIndex = index;
    this.selectedImage = image;
  }

  selectedSize(index:number){
    this.selectedSizeIndex =index;
  }
  selectedColor(index:number){
    this.selectedColorIndex =index;
    let images=this.getProductImage(this.productDetails.colors[index].images);
    this.imagesList.next(images)
    this.selectedImage=images[0]
  }
}
