import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  constructor(public g: GameService) {}

  showTable = false;
  players = Array(this.g.round_info.players);
  votesToTake = this.players.length;

  ngOnInit() {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i] = { index: i, amount: 0 };
    }
  }

  showTableTrigger() {
    this.showTable = !this.showTable;
  }

  addVote(indexPlayer: number) {
    if(this.votesToTake>0)
    {
      this.players[indexPlayer].amount += 1;
      this.votesToTake -=1;
    }
  }

  removeVote(indexPlayer: number) {
    if (this.players[indexPlayer].amount - 1 < 0) {
      return;
    }
    this.votesToTake +=1;
    this.players[indexPlayer].amount -= 1;
  }
}
