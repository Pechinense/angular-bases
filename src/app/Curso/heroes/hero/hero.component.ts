import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name="Spiderman";
  }
  changeAge():void{
    this.age=25;
  }
  resetForm():void{
    this.age=45;
    this.name="ironman";

    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'
  }
}

