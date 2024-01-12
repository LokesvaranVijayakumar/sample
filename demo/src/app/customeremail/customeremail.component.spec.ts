import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeremailComponent } from './customeremail.component';

describe('CustomeremailComponent', () => {
  let component: CustomeremailComponent;
  let fixture: ComponentFixture<CustomeremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomeremailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
