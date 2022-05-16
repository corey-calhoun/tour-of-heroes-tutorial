import { Component, OnInit } from '@angular/core';
import { HeroService } from "../heroes/hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(heroService: HeroService) { }

  ngOnInit(): void {
  }

}
