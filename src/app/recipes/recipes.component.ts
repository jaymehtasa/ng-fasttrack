import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [];
  constructor(private recipeManagerService: RecipeManagerService) { }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }
}
