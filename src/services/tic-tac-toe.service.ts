import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TicTacToeResultService } from './tic-tac-toe-result.service';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private gameBoard: Map<string, string>;
  private gameBoardSubject: Subject<Map<string, string>>;
  private turn: string;
  private firstToPlay: number;
  private ticTacToeResult: Subject<any>;

  constructor(private ticTacToeResultService: TicTacToeResultService) {
    this.initializeGame();
    this.gameBoardSubject = new Subject<Map<string, string>>();
    this.ticTacToeResult = new Subject<any>();
  }

  initializeGame() {
    this.initializeGameBoard();
    this.firstToPlay = this.whoIsGoingToStart();
    this.turn = 'X';
  }

  initializeGameBoard() {
    this.gameBoard = new Map<string, string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.gameBoard.set((i.toString().concat(j.toString())), '');
      }
    }
    return this.gameBoard;
  }

  whoIsGoingToStart() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber % 2 === 0 ? 1 : 2;
  }

  getGameBoard() {
    return this.gameBoardSubject.asObservable();
  }

  getTicTacToeResult() {
    return this.ticTacToeResult.asObservable();
  }

  getFirstToPlay() {
    return this.firstToPlay;
  }

  setValueToGameBoard(key: string) {

    if (this.gameBoard.get(key) === '') {
      this.gameBoard.set(key, this.turn);
      this.gameBoardSubject.next(this.gameBoard);
      this.checkBoard();
    }
  }

  checkBoard() {

    if (this.ticTacToeResultService.isWinner(this.turn, this.gameBoard)) {
      const secondToPlay = this.firstToPlay === 1 ? 2 : 1;
      this.ticTacToeResult.next({winner: this.turn === 'X' ? this.firstToPlay : secondToPlay});
    } else if (this.ticTacToeResultService.isDraw(this.gameBoard)) {
      console.log('to aqui');
      this.ticTacToeResult.next({gameOver: true});
    } else {
      this.turn = this.turn === 'X' ? 'O' : 'X';
    }
  }
}
