import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Weapon } from './weapon/weapon';
import { SidephoneComponent } from './sidephone/sidephone.component';
import { InventoryComponent } from './sidephone/inventory/inventory.component';
import { EquipmentComponent } from './sidephone/equipment/equipment.component';
import { MapComponent } from './sidephone/map/map.component';
import { QuestsComponent } from './sidephone/quests/quests.component';
import { CreditsComponent } from './sidephone/credits/credits.component';
import { KeyboardComponent } from './input/keyboard/keyboard.component';
import { TextlogComponent } from './textlog/textlog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidephoneComponent,
    InventoryComponent,
    EquipmentComponent,
    MapComponent,
    QuestsComponent,
    CreditsComponent,
    KeyboardComponent,
    TextlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
