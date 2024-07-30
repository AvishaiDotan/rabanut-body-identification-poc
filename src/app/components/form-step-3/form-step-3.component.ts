import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-3',
  standalone: true,
  imports: [],
  templateUrl: './form-step-3.component.html',
  styleUrl: './form-step-3.component.scss'
})
export class FormStep3Component {
  @Output() onNextStep = new EventEmitter<void>();
}
