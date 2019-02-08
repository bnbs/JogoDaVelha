/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelHeroService } from './marvel-hero.service';

describe('Service: MarvelHero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelHeroService]
    });
  });

  it('should ...', inject([MarvelHeroService], (service: MarvelHeroService) => {
    expect(service).toBeTruthy();
  }));
});
