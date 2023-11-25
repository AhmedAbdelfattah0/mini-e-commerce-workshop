import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ProductsAlbumService {
  productsSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  cartItemsCountSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  isHomePage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cartItemsCount:number[]=[];
  constructor(private httpClient: HttpClient) {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.httpClient
      .get('../../assets/data/data.json')
      .subscribe((res) => {
        this.productsSubject.next(res);
      });
  }
}
