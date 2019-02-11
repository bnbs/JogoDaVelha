/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicTacToeResultService } from './tic-tac-toe-result.service';

describe('Service: TicTacToeResult', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacToeResultService]
    });
  });

  it('should ...', inject([TicTacToeResultService], (service: TicTacToeResultService) => {
    expect(service).toBeTruthy();
  }));
});
