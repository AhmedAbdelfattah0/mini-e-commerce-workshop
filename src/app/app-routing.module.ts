import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAlbumComponent } from './products-album/products-album.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
  {path:'products-album',component:ProductsAlbumComponent},
  {path:'',redirectTo:'products-album',pathMatch:'full'},
  {path:'products-details/:id',component:ProductsDetailsComponent},
  {path:'**',redirectTo:'products-album',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
