import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep6Component } from './form-step-6.component';

describe('FormStep6Component', () => {
  let component: FormStep6Component;
  let fixture: ComponentFixture<FormStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStep6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
