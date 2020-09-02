import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewgameComponent } from './newgame/newgame.component';
import { GameService } from './game.service';
import { StartroundComponent } from './startround/startround.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { GamestartedComponent } from './gamestarted/gamestarted.component';

@NgModule({
  imports:      [ BrowserModule,  FormsModule],
  declarations: [ AppComponent, HelloComponent, NewgameComponent, StartroundComponent, FooterComponent, SettingsComponent, GamestartedComponent ],
  bootstrap:    [ AppComponent,NewgameComponent ],
  providers: [GameService]
})
export class AppModule { }
