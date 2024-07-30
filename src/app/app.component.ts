import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartFormButtonComponent } from "./components/start-form-button/start-form-button.component";
import { CommonModule } from '@angular/common';
import { FormStep1Component } from "./components/form-step-1/form-step-1.component";
import { FormStep2Component } from "./components/form-step-2/form-step-2.component";
import { FormStep3Component } from "./components/form-step-3/form-step-3.component";
import { FormStep4Component } from "./components/form-step-4/form-step-4.component";
import { FormStep5Component } from "./components/form-step-5/form-step-5.component";
import { FormStep6Component } from "./components/form-step-6/form-step-6.component";
import { FormStep7Component } from "./components/form-step-7/form-step-7.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartFormButtonComponent, CommonModule, FormStep1Component, FormStep2Component, FormStep3Component, FormStep4Component, FormStep5Component, FormStep6Component, FormStep7Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  step: number = 0

  incrementStep() {
    this.step++
  }
}
