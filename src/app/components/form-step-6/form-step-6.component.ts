import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-6',
  standalone: true,
  imports: [],
  templateUrl: './form-step-6.component.html',
  styleUrl: './form-step-6.component.scss'
})
export class FormStep6Component {
  @Output() onNextStep = new EventEmitter<void>();
}
