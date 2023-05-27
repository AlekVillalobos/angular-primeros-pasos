import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character):void{
  //onNewCharacter({name,power}: Character):void{
    // console.log('Main page');
    // console.log(character);

    //this.characters.push(character);


    const newCharacter: Character = {
      id: uuid(), ...character

      // name: character.name,
      // power: character.power

      // name: name,
      // power: power
    }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number):void{
  //   //debugger;.
  //   this.characters.splice(index,1);
  // }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
