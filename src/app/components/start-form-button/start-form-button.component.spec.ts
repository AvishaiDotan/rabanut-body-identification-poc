import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFormButtonComponent } from './start-form-button.component';

describe('StartFormButtonComponent', () => {
  let component: StartFormButtonComponent;
  let fixture: ComponentFixture<StartFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFormButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
