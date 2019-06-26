import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal1: boolean;
  showModal2: boolean;
  showModal3: boolean;
  firstName: string;
  email: string;

  onFormSubmit(form: NgForm) {
    this.firstName = form.value.firstName;
    this.email = form.value.email;
    this.showModal3 = false;
  }
}
