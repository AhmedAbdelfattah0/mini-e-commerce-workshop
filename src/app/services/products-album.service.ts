import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ProductsAlbumService {
  productsSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  isHomePage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
