import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsAlbumService } from './services/products-album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // isHomePage:boolean=false;
  title = 'workshop';
  constructor(public productsAlbumService:ProductsAlbumService){
    // console.log( this.isHomePage,' this.isHomePage');

  }

  changeOfRoutes(){
    this.productsAlbumService.isHomePage.next(window.location.pathname.includes('/products-album'));

  }
}
