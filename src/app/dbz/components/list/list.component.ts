import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {

  //@Output()
  //public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteCharacterByID: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  /*
  DeleteCharacter(index:number):void {

    if ( this.characterList.length === 0 ) return;

    console.log({index});

    this.onDeleteCharacter.emit(index);
  }
  */
  DeleteCharacterByID(id?: string): void {
    if (!id) return;

    console.log (id);

    this.onDeleteCharacterByID.emit(id);
  }


}
