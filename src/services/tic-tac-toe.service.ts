import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private gameBoard: Map<string, string>;
  private gameBoardSubject: Subject<Map<string, string>>;
  private turn: string;

  constructor() {
    this.initializeGame();
    this.gameBoardSubject = new Subject<Map<string, string>>();
  }

  initializeGame() {
    this.initializeGameBoard();
    this.turn = 'X';
  }

  initializeGameBoard() {
    this.gameBoard = new Map<string, string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.gameBoard.set((`i` + `j`), '');
      }
    }
    return this.gameBoard;
  }

  getGameBoard() {
    return this.gameBoardSubject.asObservable();
  }

  setValueToGameBoard(key: string) {
    this.gameBoard.set(key, this.turn);
    this.gameBoardSubject.next(this.gameBoard);
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }
}
