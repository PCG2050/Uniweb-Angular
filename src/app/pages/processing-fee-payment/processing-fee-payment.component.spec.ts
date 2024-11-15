import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingFeePaymentComponent } from './processing-fee-payment.component';

describe('ProcessingFeePaymentComponent', () => {
  let component: ProcessingFeePaymentComponent;
  let fixture: ComponentFixture<ProcessingFeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessingFeePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
