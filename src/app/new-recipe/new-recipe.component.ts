import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeManagerService } from '../recipe-manager.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
  providers: []
})
export class NewRecipeComponent implements OnInit {
  @Output() recipeCreated = new EventEmitter<Recipe>();

  chef;
  name;
  type;
  image;
  constructor(private recipeManagerService: RecipeManagerService) { }

  ngOnInit() {
  }
  onAddRecipeClicked() {
    this.recipeManagerService.addRecipe({
      name: this.name,
      chef: this.chef,
      image: this.image,
      type: this.type
    });
  }
}
