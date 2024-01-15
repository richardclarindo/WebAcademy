import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HEROES } from './heroes/mocks/heroes.mocks';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService){}
  getHeroesMock():Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero Service: fetched heroes");
    return heroes
  }
  getHero(id: number):Observable<Hero> {
    const hero = HEROES.find(heroValue => heroValue.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id=${id}`)
    return of(hero)
  }
}
