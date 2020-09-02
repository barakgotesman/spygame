import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-startround',
  templateUrl: './startround.component.html',
  styleUrls: ['./startround.component.css']
})
export class StartroundComponent implements OnInit {

  constructor(public g:GameService){}

  reveal = false;
  player_num = 1;
  spyShow = this.g.round_info.spy_players.includes(this.player_num);

  //reveal black screen show/hide function
  toggle()
  { 
    this.reveal= !this.reveal;
    this.spyShow = this.g.round_info.spy_players.includes(this.player_num);
    console.log("toggle called!");
  }

  reveal_next()
  {
    console.log("reveal_next function called!");
    //if not all players saw the role
    if(this.player_num+1<=this.g.round_info.players)
    {
      this.player_num++;
      this.reveal=false;
    }
    else
    {
      //GAME STARTED THX GOD
      console.log("game started!");
      this.g.gamestatus=2;
    }

    

  }

  ngOnInit() 
  {
    
  }

}