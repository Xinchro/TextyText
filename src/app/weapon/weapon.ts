import {Weapongen} from "../weapongen/weapongen"

export class Weapon {
  constructor() {
    console.log("Creating new weapon")
    let generator = new Weapongen()
    let weap1 = generator.generateNewWeapon()
  }
}

