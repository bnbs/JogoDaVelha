import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  heroes: Array<Hero>;
  constructor() { }

  ngOnInit() {
  }

  selectedHeroes(heroes: Array<Hero>) {
    this.heroes = [...heroes];
  }
}
