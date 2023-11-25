import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMetaDataComponent } from './product-meta-data.component';

describe('ProductMetaDataComponent', () => {
  let component: ProductMetaDataComponent;
  let fixture: ComponentFixture<ProductMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMetaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
