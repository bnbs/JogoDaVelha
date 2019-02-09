import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import moment from 'moment-timezone';
import { Hero } from 'src/models/hero';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroService {

  private publicKey = '4c0dc4701d397d82609a8906ef642407';
  private privateKey = '3432c61dd5d29334205e54a350807b961f47524a';
  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  private getHash(timeStamp: string): string {
    const hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this.privateKey);
    hashGenerator.appendStr(this.publicKey);
    const hash: string = hashGenerator.end().toString();
    return hash;
  }

  private getTimeStamp(): string {
    return (Date.now()/1000|0).toString();
  }

  getHero(name: string, by: string) {

    const timestamp = this.getTimeStamp();
    const hash = this.getHash(timestamp);
    const url =  this.baseUrl + '?' + by + '=' + name + '&ts=' + timestamp + '&apikey=' + this.publicKey + '&hash=' + hash;
  
    return this.http.get(url).pipe(
      map((response: any) => {
        let heroes = new Array<Hero>();
        response.data.results.forEach(element => {
          let hero: Hero = { name: element.name, thumbnail: element.thumbnail.path + '.' + element.thumbnail.extension }
          heroes.push(hero)
        });
        return heroes;
      })
    );
  }  
}
