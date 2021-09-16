import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  constructor(public g: GameService) {}

  votes = [];
  showTable = false;
  
  ngOnInit() {
    this.votes = Array(this.g.round_info.players).fill({ amount: 0 });
  }

  addVote(indexPlayer: number) {
    this.votes[indexPlayer].amount += 1;
  }
}
