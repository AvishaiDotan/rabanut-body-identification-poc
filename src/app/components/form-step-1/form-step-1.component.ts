import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-1',
  standalone: true,
  imports: [],
  templateUrl: './form-step-1.component.html',
  styleUrl: './form-step-1.component.scss'
})
export class FormStep1Component {
  @Output() onNextStep = new EventEmitter<void>();
}
