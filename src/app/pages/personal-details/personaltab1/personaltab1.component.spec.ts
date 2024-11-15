import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaltab1Component } from './personaltab1.component';

describe('Personaltab1Component', () => {
  let component: Personaltab1Component;
  let fixture: ComponentFixture<Personaltab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personaltab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personaltab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
