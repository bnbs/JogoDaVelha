import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { TicTacToeService } from 'src/services/tic-tac-toe.service';

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

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.firstToPlay = this.ticTacToeService.getFirstToPlay();
    this.ticTacToeService.getTicTacToeResult().subscribe((result) => {
      if (result.winner) {
        console.log('Jogador número: ' + result.winner + ' - ' + this.heroes[result.winner - 1].name);
      } else if (result.gameOver) {
        console.log('Deu Velha!');
      }
    });
  }

  selectedHeroes(heroes: Array<Hero>) {
    this.heroes = [...heroes];
    this.startGame = true;
  }
}
