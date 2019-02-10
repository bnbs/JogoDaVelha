import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpConfigInterceptor } from '../../interceptor/http-config.interceptor';
import { SelectHeroComponent } from '../select-hero/select-hero.component';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from '../ui/hero-card/hero-card.component';
import { GamePanelComponent } from '../game-panel/game-panel.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { BoardCellComponent } from '../game-board/board-cell/board-cell.component';
import { ScoreboardComponent } from '../game-panel/scoreboard/scoreboard.component';

@NgModule({
   declarations: [
      AppComponent,
      SelectHeroComponent,
      TicTacToeComponent,
      SearchInputComponent,
      HeroCardComponent,
      GamePanelComponent,
      GameBoardComponent,
      BoardCellComponent,
      ScoreboardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
