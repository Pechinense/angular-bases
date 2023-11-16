import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string  = 'LaraDistribuciones';
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
