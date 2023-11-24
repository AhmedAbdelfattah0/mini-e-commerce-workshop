import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAlbumComponent } from './products-album.component';

describe('ProductsAlbumComponent', () => {
  let component: ProductsAlbumComponent;
  let fixture: ComponentFixture<ProductsAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
