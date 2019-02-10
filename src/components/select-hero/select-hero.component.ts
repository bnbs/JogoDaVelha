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
  @Output() loadGame = new EventEmitter<boolean>();

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
    this.heroPlayer1 = { name: 'Hulk', thumbnail: 'https://lumiere-a.akamaihd.net/v1/images/tmb-sq_character-hulk_launch_8ce79435.jpeg' };
    // tslint:disable-next-line:max-line-length
    this.heroPlayer2 = { name: 'Captain America', thumbnail: 'http://codplayercards.com/wp-content/uploads/2016/05/Captain-America-160x160.png' };
    if (!this.heroPlayer1 || !this.heroPlayer2) {
      this.alertService.onHeroError();
    } else {
      this.loadGame.emit(true);
      this.alertService.onHeroSuccess(() => {
        this.selectedHeroes.emit([this.heroPlayer1, this.heroPlayer2]);
      });
    }
  }
}
