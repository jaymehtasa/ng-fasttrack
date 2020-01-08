import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  @Output() recipeCreated = new EventEmitter<Recipe>();

  chef;
  name;
  type;
  image;
  constructor() { }

  ngOnInit() {
  }
  onAddRecipeClicked() {
    this.recipeCreated.emit({
      name: this.name,
      chef: this.chef,
      image: this.image,
      type: this.type
    });
  }
}
