import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommproductComponent } from './ecommproduct.component';

describe('EcommproductComponent', () => {
  let component: EcommproductComponent;
  let fixture: ComponentFixture<EcommproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
