import { Component, OnInit } from '@angular/core';
import {  GameService } from '../game.service';


@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  constructor(public g:GameService) { 
    
  }

  //defualt settings
  spys = this.g.round_info.spys;
  players = this.g.round_info.players;

  
  //array of spy choosen by function "new game"
  spy_players = this.g.round_info.spy_players;




  /* NEW GAME function called */
  newgame()
  {
    //rand ID of location from data list of locations
    let rand_place_id = Math.floor(Math.random() * this.g.locations.length); 
    
    this.g.gamestatus = 1;                                //next screen
    this.g.round_info.game_loc = rand_place_id;           //set location of game

    //data of players & spys numbers.
    this.g.round_info.players = this.players;
    this.g.round_info.spys = this.spys;

     
  console.log("newgame function called! | spys: "+this.spys+" players: "+this.players)

  //SET PLAYERS ROLES 
  while(this.spy_players.length<this.spys)
  {
    for (let i=1; i<=this.players; i++)
    {
      let rand_chance_spy = Math.floor(Math.random() * this.players)+1;
      if(rand_chance_spy==1 && this.spy_players.includes(i)==false)
      {
        this.spy_players.push(i);
        console.log("spy choosen! i:"+i);
        break;
      }
    }
  }
  console.log("array of spys: ",this.spy_players);

  }

  addspy(action)
  {
    //remove spy
    if(action==-1 && this.spys>1)
    {
        this.spys--;
    }

    //add spys
    if(action==1)
    {
      if(this.spys+1 > this.players)
        this.players = ++this.spys;
      else
        this.spys++;
    }
  }

  addplayer(action)
  {
    //remove players
    if(action==-1 && this.players>2)
    {
      if(this.players-1 < this.spys)
      {
        this.spys = --this.players;
      }
      else
      {
        this.players --;
      }
    }
    //add players
    if(action==1)
    {
      this.players++;
    }
  }


  ngOnInit() {


  }

}