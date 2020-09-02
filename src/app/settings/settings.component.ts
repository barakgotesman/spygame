import { Component, OnInit } from '@angular/core';
import {  GameService } from '../game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public g:GameService) { }

  /*
    screen = 0 // edit locations screen
    screen = 1 // edit timer screen
   */
  screen = 0;



  /*
    showkind = false // show the locations as a table
    showkind = true // show them as Squares with pictures
  */
  showkind;


  /*
  object for adding new location to json
  */
  new_loc = {
      name: ''
  }

  //change timer in game
  update_timer(value)
  {
    console.log("update timer function called!",value);
    this.g.round_info.time = value;
  }

  //function to change view
  change_view()
  {
    this.showkind = !this.showkind;
  }

  //function to rest list of locations to defualt locations.
  rest()
  {
    this.g.rest_loc=true;
    this.g.load_data();
  }

  //add loc to array
  add_loc(name,img)
  {
    let loc = {name: name, img: img}
    this.g.locations.push(loc);
    localStorage.setItem('loc_json',JSON.stringify(this.g.locations));

    console.log("test2: ",this.new_loc.name)
    console.log("loc added! ",loc);
  }

  //delete item from the array
  del_loc(id)
  {
    console.log("del loc function called!")
    this.g.locations.splice(id,1);
    localStorage.setItem('loc_json',JSON.stringify(this.g.locations));
    console.log("deleted.. new array:",this.g.locations);
  }
  
  ngOnInit() {
    this.showkind = false;
  }

}