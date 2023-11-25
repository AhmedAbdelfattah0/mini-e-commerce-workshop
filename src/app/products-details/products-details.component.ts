import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ProductsAlbumService } from '../services/products-album.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { CustomModelComponent } from '../custom-model/custom-model.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  animations: [
    trigger('bounceDiv', [
      state('initial', style({})),
      transition('* => initial', [animate(
        '2s',
        keyframes([

          style({ transform: 'scale3d(1, 1, 1)' }),
        ])
      ),
    ]),
      transition('* => active', [
        animate(
          '2s',
          keyframes([
            style({ transform: 'scale3d(1, 1, 1)' }),
            style({ transform: 'scale3d(1.25, 0.75, 1)' }),
            style({ transform: 'scale3d(0.75, 1.25, 1)' }),
            style({ transform: 'scale3d(1.15, 0.85, 1)' }),
            style({ transform: 'scale3d(.95, 1.05, 1)' }),
            style({ transform: 'scale3d(1.05, .95, 1)' }),
            style({ transform: 'scale3d(1, 1, 1)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ProductsDetailsComponent implements OnInit {
  products: any[] = [];
  productDetails: any = {};
  productId: any = '';
  selectedImageIndex: number = 0;
  selectedSizeIndex: number = 0;
  selectedImage: any;
  selectedColorIndex: number = 0;
  imagesList:string[]= []
  page: number = 0;
  index: number = 0;
  myModalAlternative: any;
  bounceDivState: string = 'initial';
  constructor(
    private productsAlbumService: ProductsAlbumService,
    private router: ActivatedRoute,
    private modalService: NgbModal,
    public dialog: MatDialog
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
      if (this.products.length) {
        this.productDetails =
          this.products.find((prod) => prod.id == this.productId) || {};
        this.index = this.products.indexOf(this.productDetails);

        console.log(this.productDetails);
        this.selectedColor(0);
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

  selectImage(event:any) {
    this.selectedImageIndex = event.index;
    this.selectedImage = event.image;
  }

  selectedSize(index: number) {
    this.selectedSizeIndex = index;
  }
  selectedColor(index: number) {
    this.selectedColorIndex = index;

    this.bounceDivState = 'active';

    let images = this.getProductImage(this.productDetails.colors[index].images);
    this.imagesList = images;
    this.selectedImage = images[0];
  }
  backward() {
    this.index = this.products.indexOf(this.productDetails);
    if (this.index > 0) {
      this.productDetails = this.products[this.index - 1];
      this.selectedColor(0);
    }
  }
  forward() {
    this.index = this.products.indexOf(this.productDetails);
    if (this.index < this.products.length - 1) {
      this.productDetails = this.products[this.index + 1];
      this.selectedColor(0);
    }
  }

  openModal() {
    this.dialog.open(CustomModelComponent, { data: this.productDetails.video });
  }

  addToCart() {
    this.productsAlbumService.cartItemsCount.push(1);
    this.productsAlbumService.cartItemsCountSubject.next(
      this.productsAlbumService.cartItemsCount.length
    );
  }
}
