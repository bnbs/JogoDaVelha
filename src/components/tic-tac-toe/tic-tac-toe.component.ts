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

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.firstToPlay = this.ticTacToeService.getFirstToPlay();
  }

  selectedHeroes(heroes: Array<Hero>) {
    this.heroes = [...heroes];
    this.startGame = true;
  }
}
