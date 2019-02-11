/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroCardComponent } from './hero-card.component';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;
  let debugElement: DebugElement;
  const heroThumbnail = 'https://fermi.gsfc.nasa.gov/science/constellations/pages/inc/img/hulk/Hulk_Artwork.jpg';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.hero = { name: 'Hulk', thumbnail: heroThumbnail};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show hero name = Hulk', () => {
    const heroName = debugElement.query(By.css('h2')).nativeElement.innerText;
    expect(heroName).toBe('Hulk');
  });

  it('should show marker X', () => {
    component.firstToPlay = true;
    setTimeout(() => {
      const marker = debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(marker).toBe('X');
    }, 1000);
  });

  it('should show marker O', () => {
    component.firstToPlay = false;
    setTimeout(() => {
      const marker = debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(marker).toBe('O');
    }, 1000);
  });

  it('should have animation class', () => {
    component.myTurn = true;
    setTimeout(() => {
      const image = debugElement.query(By.css('img.player-turn-animation')).nativeElement;
      expect(image).toBeDefined();
    }, 1000);
  });

  it('should not have animation class', () => {
    component.myTurn = false;
    setTimeout(() => {
      const image = debugElement.query(By.css('img.player-turn-animation')).nativeElement;
      expect(image).toBeUndefined();
    }, 1000);
  });

  it('should load default image', () => {
    component.hero = undefined;
    setTimeout(() => {
      const image = debugElement.query(By.css('img')).nativeElement;
      expect(image.src).toBe(component.defaultThumbnail);
    }, 1000);
  });

  it('should load hero image', () => {
    component.hero = undefined;
    setTimeout(() => {
      const image = debugElement.query(By.css('img')).nativeElement;
      expect(image.src).toBe(heroThumbnail);
    }, 1000);
  });
});
