import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeManagerService } from '../recipe-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

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
  constructor(private recipeManagerService: RecipeManagerService, private router: Router, private route: ActivatedRoute) { }

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

  onHomeClicked() {
    this.router.navigate(['home'], { relativeTo: this.route });
  }
}
