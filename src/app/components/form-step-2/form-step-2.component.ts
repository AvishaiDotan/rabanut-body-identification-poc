import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-2',
  standalone: true,
  imports: [],
  templateUrl: './form-step-2.component.html',
  styleUrl: './form-step-2.component.scss'
})
export class FormStep2Component {
  @Output() onNextStep = new EventEmitter<void>();
}
