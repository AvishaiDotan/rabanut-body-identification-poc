import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-step-4',
  standalone: true,
  imports: [],
  templateUrl: './form-step-4.component.html',
  styleUrl: './form-step-4.component.scss'
})
export class FormStep4Component {
  @Output() onNextStep = new EventEmitter<void>();

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {

        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              
              break;
            case error.POSITION_UNAVAILABLE:
              break;
            case error.TIMEOUT:
              break;
            default:
              break;
          }
        }
      );
    } else {
    }
  }
}
