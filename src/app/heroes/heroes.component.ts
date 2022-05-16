import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // component css selector
  templateUrl: './heroes.component.html', // location of the component's template file
  styleUrls: ['./heroes.component.css'] // location of css file
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
    // life cycle hook that runs when component is initialized
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
