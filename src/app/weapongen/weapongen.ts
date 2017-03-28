import parts from "./parts/list"

export class Weapongen {
  constructor() {
    console.log("parts")
    console.log(parts)
    console.log(parts.swords.sets.set1.special)
  }

  generateNewWeapon() {
    console.log("generating new weapon")
  }
}
