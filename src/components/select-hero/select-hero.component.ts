import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/models/hero';
import { AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css']
})
export class SelectHeroComponent implements OnInit {

  @Output() selectedHeroes = new EventEmitter<Array<Hero>>();

  heroPlayer1: Hero;
  heroPlayer2: Hero;
  defaultHeroThumbnail = '../../assets/images/default_hero_thumbnail.png';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  onSelectedHero(hero: Hero, player: number) {
    if (player === 1) {
      this.heroPlayer1 = hero ? {...hero} : undefined;
    } else {
      this.heroPlayer2 = hero ? {...hero} : undefined;
    }
  }

  onStartGame() {

    if (!this.heroPlayer1 || !this.heroPlayer2) {
      this.alertService.onHeroError();
    } else {
      this.alertService.onHeroSuccess(() => {
        this.selectedHeroes.emit([this.heroPlayer1, this.heroPlayer2]);
      });
    }
  }
}
