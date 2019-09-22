import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Calculator';
  mainText = ''; // This variable where is going to appear in the web page
  num1: number; // The first number
  num2: number; // The second number
  operator = ''; // The operator
  answered = false;

// Taking the user's numbers and operator
  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      this.num1 = parseFloat(this.mainText);
      this.operator = key;
    }
    this.mainText += key;
  }
// This function is to do the math
  getAnswer() {
    this.num2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.mainText = (this.num1 / this.num2).toString();
    } else if (this.operator === 'x') {
      this.mainText = (this.num1 * this.num2).toString();
    } else if (this.operator === '-') {
      this.mainText = (this.num1 - this.num2).toString();
    } else if (this.operator === '+') {
      this.mainText = (this.num1 + this.num2).toString();
    } else {
    }
    this.answered = true;
  }
}
