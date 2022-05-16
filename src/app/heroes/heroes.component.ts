import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "./hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes', // component css selector
  templateUrl: './heroes.component.html', // location of the component's template file
  styleUrls: ['./heroes.component.css'] // location of css file
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // life cycle hook that runs when component is initialized
    this.getHeroes();
  }

  // this sets the selectedHero property
  // to the hero that was clicked
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero Selected: ${hero.name}`);
  }

  // this sets the heroes property
  // to the list of heroes retrieved from the hero service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // subscribe to the Observable<Hero[]> that is returned
  }

}
