import { log } from "../utils/log"

export class Character {

  health = 10
  maxHealth = this.health
  name = "Not Burrito"
  pow = 5
  dex = 3
  wis = 4
  inventory = []
  specials = []
  activeItem
  activeSpecial
  stockSpecials = []
  availableSpecials = []
  dead = false
  model
  level = 1
  experience = 0
  levelCap = 2
  statPoints = 10

  posX = 0
  posY = 0
  battleReady = false
  tick = 0

  ticker = 5

  constructor() {
    console.log("Creating new character")
    this.randomiseStats()
  }

  randomiseStats() {
    //check if the ticker has reached 0 and give any remaining points to health
    if(this.ticker === 0) {
      this.maxHealth += this.statPoints * 10
      this.statPoints = 0
      log("Ticker at 0")
    }
    //a temporary variable to deal with the fact that health has to be higher than 1 per point
    let tempNo
    tempNo = Math.floor(Math.random()*this.statPoints)
    this.maxHealth += Math.floor(tempNo*10)
    this.health = this.maxHealth
    this.statPoints = this.statPoints - tempNo

    //following the same convention as above
    tempNo = Math.floor(Math.random()*this.statPoints)
    this.pow += Math.floor(tempNo)
    this.statPoints = this.statPoints - tempNo

    //this is for variables that are not being used currently
    tempNo = Math.floor(Math.random()*this.statPoints)
    this.dex += Math.floor(tempNo)
    this.statPoints = this.statPoints - tempNo
    tempNo = Math.floor(Math.random()*this.statPoints)
    this.wis += Math.floor(tempNo)
    this.statPoints = this.statPoints - tempNo
    this.maxHealth = Math.floor(Math.random()*75+1)
    this.health = this.maxHealth

    //checks to see if the ticker and stat points have not run out
    if(this.statPoints > 0 && this.ticker>0) {
      //decrement the ticker
      this.ticker--
      //do this again
      this.randomiseStats()
    } else {
      //print final stats
      log("------Character Final Stats------")
      log("Level: " + this.level)
      log("Max Health: " + this.maxHealth)
      log("Power: " + this.pow)
      log("Dexterity: " + this.dex)
      log("Wisdom: " + this.wis)
      log("Max points: " + this.level*10)
      log("Remaining points: " + this.statPoints)
      log("------End Character Stats------")
    }
  }

  // getModel() {
  //   //log("getting player model")
  //   model = new createjs.Bitmap("Assets/Models/Taco1.svg")
  //   return model
  // }

  /*
  * Method to force the exp to a certain value
  */
  setExp(newExp) {
    this.experience = newExp
    //check for a level up
    this.checkLevelUp()
  }

  /*
  * Method to get the current exp
  *
  * @return experience
  */
  getExp() {
    return this.experience
  }

  /*
  * Method to get the exp required for the next level up
  *
  * @return gap
  */
  getExpToNextLevel() {
    let gap = this.levelCap - this.experience
    return gap
  }

  /*
  * Method to give an amount of experience
  */
  giveExp(addExp) {
    //add the exprience to the current experience
    this.experience += addExp
    //check for a level up
    this.checkLevelUp()
  }

  // /*
  // * Method to check for a level up
  // */
  checkLevelUp() {
    //log("Checking levelCap/exp: " + levelCap + " " + experience)
    //
    //while the experience is above the cap loop through this
    while(this.experience >= this.levelCap) {
      log("----LEVEL UP----")
      // addCriticalInfo("darkpink", "***" + this.name + " levelled up!***")
      // playSound("levelup.wav")
      //increment the  level
      this.level += 1
      //level up the stats
      this.levelUpStats()
      //unlock the next skill, if applicable
      //unlockNextSkill()
      //remove the current level cap from the experience pool
      this.experience -= this.levelCap
      //ramp up the level cap
      this.levelCap += Math.ceil(this.levelCap*0.5)
      //increment the enemy level, to keep up a challenge
      //enemyLevel += 1
      //print the player's stats
      //player.printStats()
    }
  }

  /*
  * Method for checking and unlocking skills
  */
  unlockNextSkill() {
    // TODO

    //log("Unlocking special")
    //switch to unlock based on level
    switch(this.level) {
      case 2:
      //at level 2 add double attack
      // let spec = new Special()
      // spec.setName("Double Attack")
      // player.addSpecial(spec)
      break
      case 3:
      //at level 3 add tripel attack
      // let spec = new Special()
      // spec.setName("Triple Attack")
      // player.addSpecial(spec)
      break
      case 5:
      //at level 5 add lettuce slap
      // let spec = new Special()
      // spec.setName("Lettuce Slap")
      // player.addSpecial(spec)
      break
      case 10:
      //at level 10 add mince meat special
      // let spec = new Special()
      // spec.setName("Mince Meat Special")
      // player.addSpecial(spec)
      break
    }
  }

  // /*
  // * Method to level up the stats
  // */
  levelUpStats() {
    //increment maximum health by 10% of current maximum health
    this.maxHealth += Math.floor(this.maxHealth*0.1)
    //give full health
    this.health = this.maxHealth
    //increment power by 20% of current power
    this.pow += Math.floor(this.pow*0.2)
    //increment dexterity by 20% of current dexterity
    this.dex += Math.floor(this.dex*0.2)
    //increment wisdom by 20% of current wisdom
    this.wis += Math.floor(this.wis*0.2)
  }

  /*
  * Method to get the player's level
  *
  * @return level
  */
  getLevel() {
    return this.level
  }

  /*
  * Method to add a specific item
  */
  addItem(item) {
    //adds the items to the items array(or inventory)
    this.inventory.push(item)
  }

  /*
  * Method to add a random item
  */
  giveRandomItem() {
    log("giving random item")
    //get a random number, based on how many item letiations there are(3 now)
    let rand = Math.floor(Math.random()*2)
    log("Rand: " + rand)
    let randItem

    //switch to check the random number and to check what what item to add
    switch(rand) {
      case 0:
    //add a normal potion
    // randItem = new Item()
    // randItem.setName("Potion")

    log("Adding potion")
    break
    case 1:
    //add a better potion
    // randItem = new Item()
    // randItem.setName("Better Potion")

    log("Adding better potion")
    break
    case 2:
    //add an ultra potion
    // randItem = new Item()
    // randItem.setName("Ultra Potion")

    log("Adding ultra potion")
    break
    }
    //add that item
    this.addItem(randItem)
  }

  /*
  * Method to remove an item from the array(or inventory)
  */
  removeItem(item) {
    // TODO
    //temp variable to act as the item's index
    // let tempNo
    // //cycle through items
    // for(let i=0;i<items.length;i++) {
    //   //check if the input item's ID is the same as the current cycle item's ID
    //   if(item.getID() === this.inventory[i].getID()) {
    //     //set the temp letaible to the current index
    //     tempNo = i
    //   }
    // }
    // //remove that index from items(or inventory)
    // items.splice(tempNo, 1)
    // //set the text of the "items" field in the battle screen
    // //also set the active item
    // if(items.length === 0) {
    //   //if no more items, set it back "Items" and "nullify" the active item
    //   this.activeItem = ""
    //   // battle.writeItemText("Items")
    // } else if(tempNo+1 >= items.length) {
    //   //if only 1 item left, set it to the first index(or 0)
    //   this.activeItem = inventory[0]
    //   // battle.writeItemText(this.activeItem.getName())
    // } else if(tempNo+1 < items.length) {
    //   //if more than 1 item left, then set it to the next item
    //   this.activeItem = inventory[tempNo]
    //   // battle.writeItemText(this.activeItem.getName())
    // }
  }

  /*
  * Method to pick the next item
  */
  nextItem() {
    // TODO
    // //check if the active item is null
    // if(!this.activeItem) {
    //   //set the active item to the item at the first index
    //   this.activeItem = this.inventory[0]
    // } else {
    //   let currentIndex
    //   //cycle through the items
    //   for(let i=0i<items.lengthi++) {
    //     //check if the active item and cycled item IDs match
    //     if(this.activeItem.getID() === this.inventory[i].getID()) {
    //       //set the variable to the current index
    //       currentIndex = i
    //     }
    //   }
    //   //increment the current index
    //   currentIndex++

    //   if(currentIndex >= items.length) {
    //     //if it goes over the items length set it to 0
    //     currentIndex = 0
    //   } else {
    //     currentIndex
    //   }
    //   log("Current index: "  + currentIndex)
    //   //set the active item to the index we set
    //   this.activeItem = inventory[currentIndex]
    // }
  }

  /*
  * Method to pick the previous items
  */
  prevItem() {
    // TODO
    // //this is the same as for the next item, but in reverse
    // if(!this.activeItem) {
    //   this.activeItem = inventory[items.length-1]
    // } else {
    //   let currentIndex
    //   for(let i=0i<items.lengthi++) {
    //     if(this.activeItem.getID() === inventory[i].getID()) {
    //       currentIndex = i
    //     }
    //   }
    //   currentIndex--
    //   if(currentIndex < 0) {
    //     currentIndex = items.length-1
    //   } else {
    //     currentIndex
    //   }
    //   log("Current index: "  + currentIndex)
    //   this.activeItem = inventory[currentIndex]
    // }
  }

  /*
  * Method to get the array of items
  *
  * @return items
  */
  getInventory() {
    return this.inventory
  }

  /*
  * Method to get the current active item
  *
  * @return activeItem
  */
  getActiveItem() {
    return this.activeItem
  }

  /*
  * Method to add a special attack
  */
  addSpecial(special) {
    //add the special to both the
    //normal array(used in battles)
    //and to the stock array(used to reset the specials between battles)
    this.specials.push(special)
    this.stockSpecials.push(special)
  }

  /*
  * Method to remove a special attack
  */
  removeSpecial(special) {
    //temp variable
    let tempNo
    //cycle through specials
    for(let i=0;i<this.specials.length;i++) {
      //check if the names (there will never be more than one with the same name)
      if(special.getName() === this.specials[i].getName()) {
        //set our temp variable
        tempNo = i
      }
    }
    log("special removed  at " + tempNo + " " + this.specials[tempNo].getName())

    // TODO
    //remove the special at the temp variable as an index
    this.specials.splice(tempNo, 1)
    //set the text of the "specials" field in the battle screen
    //also set the active special
    if(this.specials.length === 0) {
      //if no more specials "nullify" the active special
      //write "Specials" on the battle screens button
      //log("changing text to specials")
      this.activeSpecial = null
      // battle.writeSpecialText("Specials")
    } else if (tempNo+1 >= this.specials.length) {
      //if only one special left set the active special to the one at the first index
      this.activeSpecial = this.specials[0]
      //log("active special forced to items[0]")
      // battle.writeSpecialText(this.activeSpecial.getName())
    } else if (tempNo+1 < this.specials.length) {
      //if more than 1 special left, pick the next special
      this.activeSpecial = this.specials[tempNo]
      //log("active special set to specials["+tempNo+"]")
      // battle.writeSpecialText(this.activeSpecial.getName())
    }
  }

  /*
  * Method for picking the next special
  */
  nextSpecial() {
    //this is essentially a duplicate of the nextItem method, but for specials instead
    if(!this.activeSpecial) {
      this.activeSpecial = this.specials[0]
    } else {
      let currentIndex
      for(let i=0;i<this.specials.length;i++) {
        if(this.activeSpecial.getName() === this.specials[i].getName()) {
          currentIndex = i
        }
      }
      currentIndex++
      if(currentIndex >= this.specials.length) {
        currentIndex = 0
      } else {
        currentIndex
      }
      this.activeSpecial = this.specials[currentIndex]
    }
  }

  /*
  * Method for picking the previous special
  */
  prevSpecial() {
    //this is essentially a duplicate of the prevItem method, but for specials instead
    if(!this.activeSpecial) {
      this.activeSpecial = this.specials[this.specials.length-1]
    } else {
      let currentIndex
      for(let i=0;i<this.specials.length;i++) {
        if(this.activeSpecial.getName() === this.specials[i].getName()) {
          currentIndex = i
        }
      }
      currentIndex--
      if(currentIndex < 0) {
        currentIndex = this.specials.length-1
      } else {
        currentIndex
      }
      this.activeSpecial = this.specials[currentIndex]
    }
  }

  /*
  * Method for re-filling the specials
  */
  fillAvailSpec() {
    // TODO
    //this fills an array with ALL the specials that can be made available
    //        let spec = new Special()
    //        spec.setName("Double Attack")
    //        availableSpecials.push(spec)
    //
    //        spec = new Special()
    //        spec.setName("Triple Attack")
    //        availableSpecials.push(spec)
    //
    //        spec = new Special()
    //        spec.setName("Lettuce Slap")
    //        availableSpecials.push(spec)
    //
    //        spec = new Special()
    //        spec.setName("Mince Meat Special")
    //        availableSpecials.push(spec)

    //log("Available skills: " + availableSpecials.length)
  }

  /*
  * Method for getting the active special
  *
  * @return activeSpecial
  */
  getActiveSpecial() {
    return this.activeSpecial
  }

  /*
  * Method for getting the specials array
  *
  * @return specials
  */
  getSpecials() {
    return this.stockSpecials
  }

  /*
  * method for getting the name of the next special to be unlocked
  */
  getNextSpecialName() {
    let nextSpecial = ""

    //check if the stock array is smaller than the available array
    if(this.stockSpecials.length < this.availableSpecials.length) {
      //the next special will be the one that is 1 over the current unlocked skills array size
      nextSpecial = this.availableSpecials[this.stockSpecials.length].getName()
    } else {
      //nothing to unlock
      nextSpecial = "Nothing to unlock"
    }

    return nextSpecial
  }

  /*
  * Method to reset the usable specials to all the unlock specials
  */
  resetSpecials() {
    //variable to check if it is necassary to add any specials
    let okayToAdd = false
    //cycle through the stock(unlocked) specials
    for(let i=0;i<this.stockSpecials.length;i++) {
      //cycle through the specials that can currently be used
      for(let j=0;j<this.specials.length;j++) {
        //log("Stock specials " + stockSpecials[i].getName() + " Specials " + specials[j].getName())
        //check if the names match
        if(this.stockSpecials[i].getName() === this.specials[j].getName()) {
          //if they match, just go to the next special
          okayToAdd = false
          //log("Specials match, setting false")
          break
        } else {
          //if they don't match, we need to add a special
          okayToAdd = true
          //log("Specials do not match, setting true")
        }
      }
      //if we need to add or if the specials array is 0
      if(okayToAdd || this.specials.length === 0) {
        //add the unlocked special at the current index
        this.specials.push(this.stockSpecials[i])
        //log("Adding special " + stockSpecials[i].getName())
      } else {
        //log("Special already available " + stockSpecials[i].getName())
      }
    }
    //log(specials.length)
  }

  /*
  * Method to set the health to a specified value
  */
  setHealth(inHealth) {
    this.health = inHealth
  }

  /*
  * Method to get the current health
  *
  * @return health
  */
  getHealth() {
    return this.health
  }

  /*
  * Method to set the maximum health to a certain value
  */
  setMaxHealth(inHealth) {
    this.maxHealth = inHealth
  }

  /*
  * Method to get the maximum health
  */
  getMaxHealth() {
    return this.maxHealth
  }

  /*
  * Method to set the name
  */
  setName(playerName) {
    this.name = playerName
  }

  /*
  * Method to get the name
  *
  * @return name
  */
  getName() {
    return this.name
  }

  /*
  * Kill the player
  */
  setDead() {
    // TODO
    // addFlavorInfo("white", "You have died. Game over.")
    // tellFlavorInfo()
    //alert("")
    this.dead = true
  }

  /*
  * Kill the player
  */
  isDead() {
    return this.dead
  }

  /*
  * Method to decrement the health
  */
  decrementHealth(decrement) {
    //if the input is not a number (null if not there, so fires too)
    if(typeof decrement != 'number') {
    //if health is about to drop to 0 or below
      if(this.health-1<=0) {
        //set health to 0
        this.health = 0
        //set dead
        this.setDead()
      } else {
        //decrement health by 1
        this.health--
      }
    } else {
      //if health is about to drop to 0 or below
      if(this.health-decrement<=0) {
        //set health to 0
        this.health = 0
        //set dead
        //this.dead = true
        this.setDead()
        //show the end screen
        //showEndScreen()
      } else {
        //decrement health by the input
        this.health = this.health - decrement
      }
    }
  }

  /*
  * Method to attack a target
  */
  attack(target) {
    // TODO
    //if(typeof target === Enemy) {
    //
    //decrement the target's health by the power
    target.decrementHealth(this.pow)
    if(!target.isDead()) {
      // addCombatText(this.name + " attacked " + target.getName() + " for " + this.pow + " and left them with " + target.getHealth() + " health!")
    }
    //set the player's action time to 0
    //battle.setActionTime(0)
    //} else {
    //  alert(typeof target)
    //}
  }

  /*
  * Method to attack a target with a special attack
  */
  useSpecial(target) {
    // TODO
    //check if the specials array size is bigger than 0
    if(this.specials.length > 0) {
      //target.decrementHealth(pwr*2)
      //log("using " + this.activeSpecial.getName())
      //us the active special's effect on the target
      this.activeSpecial.effect(target)
      //remove this special from the usable specials array
      this.removeSpecial(this.activeSpecial)
      //set the player's battle timer to 0
      // battle.setActionTime(0)
    } else {
      //no specials to use
      log("specials empty")
    }
  }

  /*
  * Method to get the power
  *
  * @return pow
  */
  getPow() {
    return this.pow
  }

  /*
  * Method to get the dexterity
  *
  * @return dex
  */
  getDex() {
    return this.dex
  }

  /*
  * Method to get the wisdom
  *
  * @return wis
  */
  getWis() {
    return this.wis
  }

  /*
  * Method to use the active item
  */
  useActiveItem() {
    // TODO
    //check if the items array(or inventory) size is bigger than 0
    // if(items.length > 0) {
    //   //log("using " + this.activeItem.getName())
    //   //use the item's effect on the player(though can be the enemy)
    //   this.activeItem.effect(player)
    //   //remove the item from the item array(or inventory)
    //   this.removeItem(this.activeItem)
    //   //set the player's battle timer to 0
    //   // battle.setActionTime(0)
    // } else {
    //   //no more items
    //   log("inventory empty")
    // }
  }

  /*
  * Increment the health by an amount
  */
  incrementHealth(increment) {
    //if the input is not a number (null if not there, so fires too)
    if(typeof increment != 'number') {
      //if the input is not a number (null if not there, so fires too)
      if(this.health+1>=this.maxHealth) {
        //current health becomes maximum health
        this.health = this.maxHealth
      } else {
        //increment health by 1
        this.health++
      }
    } else {
      //if the health is about to hit, or go above, the maximum health
      if(this.health +increment >= this.maxHealth) {
        //current health becomes maximum health
        this.health = this.maxHealth
      } else {
        //increment gets added to health
        this.health = this.health + increment
      }
    }
  }

  /*
  * Methoed to print the player's stats to console
  */
  printStats() {
    log("------Player Stats------")
    log("Level: " + this.level)
    log("Exp: " + this.experience)
    log("Level Cap: " + this.levelCap)
    log("Max Health: " + this.maxHealth)
    log("Health: " + this.health)
    log("Power: " + this.pow)
    log("Dex: " + this.dex)
    log("Will: " + this.wis)
    log("# Specials: " + this.specials.length)
    log("# Stock Specials: " + this.stockSpecials.length)
    log("# Items: " + this.inventory.length)
    log("Position: " + this.posX + ", " + this.posY)
    log("------End Player Stats------")
  }

  move(x, y) {
    this.posX += x
    this.posY += y
  }

  getPos() {
    return [this.posX, this.posY]
  }

  setBattleReady(inStatus) {
    this.battleReady = inStatus
  }

  isBattleReady() {
    return this.battleReady
  }

  addTick() {
    this.tick++
  }

  getTick() {
    return this.tick
  }

  // TODO
  // getCombinedArmor() {
  //   return (this.armorHead.getArmor()
  //     + this.armorArmLeft.getArmor()
  //     + this.armorTorso.getArmor()
  //     + this.armorArmRight.getArmor()
  //     + this.armorLegs.getArmor()
  //     + this.armorFootLeft.getArmor()
  //     + this.armorFootRight.getArmor())
  // }

  // TODO
  // switch(arguments.length) {
  //   //nothing
  //   case 0:

  //   break
  //   //name
  //     case 1:
  //     this.name = arguments[0]
  //     fillAvailSpec()
  //     this.ranStats()
  //     break
  //   //name, pos array
  //   case 2:
  //     this.name = arguments[0]
  //     this.posX = arguments[1][0]
  //     this.posY = arguments[1][1]
  //     fillAvailSpec()
  //     this.ranStats()
  //     break
  //   //name, x, y
  //   case 3:
  //     this.name = arguments[0]
  //     this.posX = arguments[1]
  //     this.posY = arguments[2]
  //     fillAvailSpec()
  //     this.ranStats()
  //     break
  // }

}
