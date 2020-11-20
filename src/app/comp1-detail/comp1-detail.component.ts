import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-comp1-detail',
  templateUrl: './comp1-detail.component.html',
  styleUrls: ['./comp1-detail.component.css']
})
export class Comp1DetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {
    this.hero = {id:2, name:"qq"};
  }

  ngOnInit(): void {
  }

}
