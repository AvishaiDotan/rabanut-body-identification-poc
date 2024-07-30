import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-form-button',
  standalone: true,
  imports: [],
  templateUrl: './start-form-button.component.html',
  styleUrl: './start-form-button.component.scss'
})
export class StartFormButtonComponent {
  @Output() onNextStep = new EventEmitter<void>();
}
