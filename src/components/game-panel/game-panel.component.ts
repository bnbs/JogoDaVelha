import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  @Input() heroes: Array<Hero>;

  constructor() { }

  ngOnInit() {
  }

}
