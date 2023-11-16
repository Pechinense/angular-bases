import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter = 0;

  increaseBy(){
    this.counter = this.counter + 1;
  }

  decreaseBy(){
    this.counter = this.counter - 1;
  }
  reset(){
    this.counter = 0;
  }

}
