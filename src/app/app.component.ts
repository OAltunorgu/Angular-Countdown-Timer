import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate: any;
  targetDate: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;

  x = setInterval(() => {
    this.currentDate = new Date().getTime();
    this.targetDate = new Date('June 18, 2023 07:00:00').getTime();
    this.difference = this.targetDate - this.currentDate;
    this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor(
      (this.difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
    if (this.difference < 0) {
      clearInterval(this.x);
      this.days = "Süre Doldu!";
    }
  }, 1000);
}
