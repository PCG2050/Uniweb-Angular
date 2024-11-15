import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFeePaymentComponent } from './admission-fee-payment.component';

describe('AdmissionFeePaymentComponent', () => {
  let component: AdmissionFeePaymentComponent;
  let fixture: ComponentFixture<AdmissionFeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionFeePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
