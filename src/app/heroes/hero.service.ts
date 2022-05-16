import { Injectable } from '@angular/core';
import { HEROES } from "../mock-heroes";
// import { Logger } from '../logger.service';
import { Hero } from "../hero";
import { Observable, of} from "rxjs";
import { MessageService } from "../message.service";

@Injectable({
  // declare that this service should be created
  // by the root application injector.
  // This service will be available throughout the application.
  providedIn: 'root'
})
export class HeroService {

  // constructor(private messageService: messageService) { }

  constructor(private messageService: MessageService) { }

  // simulate retrieval of data using of() ONLY FOR DEMO PURPOSES
  // data from a server would be an async call using httpClient.get()
  // This method returns an Observable<Hero[]>, that
  // emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
