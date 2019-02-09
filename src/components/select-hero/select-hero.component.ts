import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css']
})
export class SelectHeroComponent implements OnInit {

  heroPlayer1: Hero;
  heroPlayer2: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelectedHero(hero: Hero, player: number){
    if(player === 1) this.heroPlayer1 = {...hero};
    else this.heroPlayer2 = {...hero};
  }
}
