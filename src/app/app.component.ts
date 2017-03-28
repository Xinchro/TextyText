import { Component } from '@angular/core';
import {Weapon} from './weapon/weapon'
// import {Character} from './character/character'
import {Enemy} from './character/enemy/enemy'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
    console.log("Starting game")
    console.log(this.title)
    var newWeapon = new Weapon()
    // var newCharacter = new Character()
    // let enemy = new Enemy()

  }
}
