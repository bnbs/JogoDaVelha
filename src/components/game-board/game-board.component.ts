import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../../services/tic-tac-toe.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  gameBoard: Map<string, string>;

  constructor(private tictTacToeService: TicTacToeService) { }

  ngOnInit() {
    this.tictTacToeService.getGameBoard().subscribe((board: Map<string, string>) => {
      this.gameBoard = board;
    });
  }

  onSelectBoardCell(position: string) {
    this.tictTacToeService.setValueToGameBoard(position);
  }
}
