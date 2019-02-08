import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectHeroComponent } from '../select-hero/select-hero.component';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component';

@NgModule({
   declarations: [
      AppComponent,
      SelectHeroComponent,
      TicTacToeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
