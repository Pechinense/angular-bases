import {  Component, EventEmitter, Output, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  saveCharacter():void{
    console.log(this.character);
    this.onNewCharacter.emit(this.character)
    this.character.name="";
    this.character.power=0;
  }

 }