import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAlbumComponent } from './products-album/products-album.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsAlbumComponent,
    ProductsDetailsComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
