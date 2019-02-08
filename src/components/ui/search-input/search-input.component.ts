import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() heroes: [];
  @Output() hero = new EventEmitter<string>();

  heroName = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.heroName.valueChanges.subscribe((text) => {
      this.hero.emit(text);
    });
  }
}
