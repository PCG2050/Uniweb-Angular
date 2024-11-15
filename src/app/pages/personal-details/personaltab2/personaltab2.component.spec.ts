import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaltab2Component } from './personaltab2.component';

describe('Personaltab2Component', () => {
  let component: Personaltab2Component;
  let fixture: ComponentFixture<Personaltab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personaltab2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personaltab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
