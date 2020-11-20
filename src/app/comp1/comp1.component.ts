import { Component, OnInit } from '@angular/core';
import { mockHero } from './mock-comp';
import { Hero } from '../hero';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  hero = mockHero;
  selectedHero: Hero;
  constructor() {
    this.selectedHero = {id:1,name:"dgd"};
  }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
