import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamestarted',
  templateUrl: './gamestarted.component.html',
  styleUrls: ['./gamestarted.component.css']
})
export class GamestartedComponent implements OnInit {

  constructor(public g:GameService) { }

  timer = {
    timeleft : 1000 * 60 * this.g.round_info.time ,  //8 min time
    interval : null,
    text : "",
    pause : true,
    timer_button : "Start Timer"
  }


   millisecondsToTime(milli=this.timer.timeleft)
  {
        let seconds = (milli / 1000) % 60;
        let minutes = Math.floor((milli / (60 * 1000)) % 60);

        this.timer.text= minutes + ":" + seconds ;
  }


  //function for button of the timer
  settimer()
  {
    console.log("settimer function called!");
    
    //if the timer in pause - so start again
    if(this.timer.pause)
    {
      this.startTimer();
      this.timer.pause=false;
    }
    else{
      this.pauseTimer();
      
    }
    //change UI text of the button
    this.timer.timer_button = (this.timer.pause) ? "Start timer" : "Pause timer" ;
  }

  //function to run the timer
  startTimer() {
    this.timer.interval = setInterval(() => {
      //if you have more time for this game
      if(this.timer.timeleft > 0) {
        //edit time info about the timer
        this.timer.timeleft-=1000;
        this.millisecondsToTime();
      } 
      else 
      {
        console.log("game ended! time out");
        this.pauseTimer();
      }
    },1000)
  }

  //function to pause the timer of the game.
  pauseTimer() {
    console.log("pauseTimer function called!")
    clearInterval(this.timer.interval);
    this.timer.pause=true;    //set pause status to true
  }

  ngOnInit() {
    
  }

}