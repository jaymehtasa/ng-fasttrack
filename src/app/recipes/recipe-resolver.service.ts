import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeManagerService } from '../recipe-manager.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeManagerService: RecipeManagerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.recipeManagerService.getRecipe(+route.params.id);
  }
}