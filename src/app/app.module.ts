import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAlbumComponent } from './products-album/products-album.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products-details/products-details.component';
 import { StarRatingComponent } from './star-rating/star-rating.component';
import { CustomModelComponent } from './custom-model/custom-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductIdentificationComponent } from './product-identification/product-identification.component';
import { ProductMetaDataComponent } from './product-meta-data/product-meta-data.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsAlbumComponent,
    ProductsDetailsComponent,
    StarRatingComponent,
    CustomModelComponent,
    ProductIdentificationComponent,
    ProductMetaDataComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     BrowserAnimationsModule,
     MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
