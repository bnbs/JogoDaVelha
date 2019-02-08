import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SelectHeroComponent } from '../select-hero/select-hero.component';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';

@NgModule({
   declarations: [
      AppComponent,
      SelectHeroComponent,
      TicTacToeComponent,
      SearchInputComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
