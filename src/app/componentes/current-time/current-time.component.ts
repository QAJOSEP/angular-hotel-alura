import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  template: `
    <div>{{ currentTime | date:'mediumTime' }}</div>
  `
})
export class CurrentTimeComponent implements OnInit {
  currentTime = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
