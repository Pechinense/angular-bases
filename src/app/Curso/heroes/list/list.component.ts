import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Thor','IronMan','Hulk','SheHulk'];
  public deletedHero?:string;


  removeLastHero():void {
   this.deletedHero = this.heroNames.pop();
  }
}
