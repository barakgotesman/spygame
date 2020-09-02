import { Component, VERSION } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(public g:GameService)
  {

  }
}
