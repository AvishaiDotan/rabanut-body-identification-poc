import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep7Component } from './form-step-7.component';

describe('FormStep7Component', () => {
  let component: FormStep7Component;
  let fixture: ComponentFixture<FormStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStep7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
