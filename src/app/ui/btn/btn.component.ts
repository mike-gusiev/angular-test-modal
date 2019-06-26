import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})

export class BtnComponent {
  @Input() content: string;
  @Input() btnType: string;

  constructor() {
  }

  getBackgroundColor() {
    switch (this.btnType) {
      case 'info':
        return 'blue';
      case 'success':
        return 'green';
      case 'danger':
        return 'red';
    }
  }

  getBtnType() {
    return this.btnType === 'success' ? 'submit' : 'button';
  }
}
