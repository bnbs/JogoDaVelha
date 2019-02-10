import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { TicTacToeService } from 'src/services/tic-tac-toe.service';
import { AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  heroes: Array<Hero>;
  startGame = false;
  firstToPlay: number;
  winner: number;

  constructor(private ticTacToeService: TicTacToeService, private alertService: AlertService) { }

  ngOnInit() {
    this.firstToPlay = this.ticTacToeService.getFirstToPlay();
    this.ticTacToeService.getTicTacToeResult().subscribe((result) => {
      if (result.winner) {
        this.alertService.onGameWinner(this.heroes[result.winner - 1], result.winner);
      } else if (result.gameOver) {
        this.alertService.onGameDraw();
      }
    });
  }

  selectedHeroes(heroes: Array<Hero>) {
    this.heroes = [...heroes];
    this.startGame = true;
  }
}
