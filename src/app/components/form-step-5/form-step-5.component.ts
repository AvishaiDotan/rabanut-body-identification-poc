import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-5',
  standalone: true,
  imports: [],
  templateUrl: './form-step-5.component.html',
  styleUrl: './form-step-5.component.scss'
})
export class FormStep5Component {
  @Output() onNextStep = new EventEmitter<void>();
}
