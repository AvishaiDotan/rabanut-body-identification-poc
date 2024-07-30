import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-7',
  standalone: true,
  imports: [],
  templateUrl: './form-step-7.component.html',
  styleUrl: './form-step-7.component.scss'
})
export class FormStep7Component {
  @Output() onNextStep = new EventEmitter<void>();
}
