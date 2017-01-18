import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Recipe Box {{month}}/{{day}}/{{year}}</h1>
    <h3>{{firstRecipe}}</h3>
    <h4>Ingredients</h4>
    <ul>
    <li *ngFor="let currentIngredient of ingredients">{{currentIngredient.description}}</li>
    </ul>
    <h4>Directions</h4>
    <ul>
    <li *ngFor="let currentDirection of directions">{{currentDirection.description}}</li>
    </ul>


    <h3>{{secondRecipe}}</h3>
    <h4>Ingredients</h4>
    <ul>
    <li *ngFor="let currentbingredient of bingredients">{{currentbingredient.description}}</li>
    </ul>
    <h4>Directions</h4>
    <ul>
    <li *ngFor="let currentBdirection of bdirections">{{currentBdirection.description}}</li>
    </ul>
   `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  firstRecipe: string = 'Peach Cobbler';


  directions: Direction[] = [
     new Direction('wisk'),
     new Direction('stir'),
     new Direction('shake'),
     new Direction('bake')
   ]
  ingredients: Ingredient[] = [
     new Ingredient('1lb Peaches'),
     new Ingredient('1/2lb Sugar'),
     new Ingredient('2lb Flour')
   ]

   secondRecipe: string = 'Sourdough Bread';

   bdirections: Bdirection[] = [
      new Bdirection('wisk'),
      new Bdirection('stir'),
      new Bdirection('shake'),
      new Bdirection('bake')
    ]
   bingredients: Bingredient[] = [
      new Bingredient('90lb SOURS'),
      new Bingredient('1/2lb Sugar'),
      new Bingredient('2lb Flour')
    ];}




  export class Ingredient {
    public done: boolean = false;
    constructor(public description: string) { }
  }

  export class Direction {
    public done: boolean = false;
    constructor(public description: string) { }
  }
  export class Bingredient {
    public done: boolean = false;
    constructor(public description: string) { }
  }

  export class Bdirection {
    public done: boolean = false;
    constructor(public description: string) { }
  }
