import { Injectable } from '@angular/core';

@Injectable()
export class GameService 
{
 /*
  0 - welcome scrren
  1 - game give roles for players
  2 - game started
  3 - game settings
  */
  game_ver = 0.1;
    gamestatus=0;
    round_info=
    { 
      time: 7, //time in min
      game_loc : 0,
      game_loc_img: "",
      players : 2,
      spys : 1,
      spy_players : []
    }
  locations=[];

  //boolean for rest locations list from settings
  rest_loc= false;

  rest()
  {
    console.log("rest function called!");
      this.gamestatus=0;
    this.round_info=
    { 
      time: 7,
      game_loc : 0,
      game_loc_img : "",
      players : 2,
      spys : 1,
      spy_players : []
    }
  }

/*
  include(arr,obj) {
      return (arr.indexOf(obj) != -1);
  }
*/

//function to load data from json about locations 
 load_data()
 {
   console.log("load data function called!");
   if(localStorage.getItem('loc_json')==null || localStorage.getItem('loc_json').length<1 || this.rest_loc==true)
   {
     this.locations = 
    [ 
      { name: "spa", img: "https://i.imgur.com/jxqQvGD.jpg"},
      { name: "casino",img: "https://i.imgur.com/jrPth1m.jpg"},
      { name: "wedding", img: "https://i.imgur.com/AK5LmHG.jpg"},
      { name: "airplane", img: "https://i.imgur.com/CmEKTAw.jpg"},
      { name: "Amusement Park", img: "https://i.imgur.com/WDAvN6Q.jpg"},
      { name: "Night Club", img: "https://i.imgur.com/PaixY4S.jpg"},
      { name: "Pub", img: "https://i.imgur.com/QyN4VuL.jpg"},
      { name: "resturant", img: "https://i.imgur.com/3oK3q9O.jpg"},
      { name: "Supermarket", img: "https://i.imgur.com/8Dx8jPl.jpg"}
    ]
    localStorage.setItem('loc_json',JSON.stringify(this.locations));
    console.log("no data from json, set default locations in browser")
      if(this.rest_loc)
        {
          this.rest_loc= false;
          console.log("rest_loc DONE!");

        }
   }
   else
   {
     this.locations = JSON.parse(localStorage.getItem("loc_json"));
     console.log("json data loaded from browser!", this.locations+" len test:",this.locations.length);
   }
 }

  constructor() { 
    this.load_data();
  }

}