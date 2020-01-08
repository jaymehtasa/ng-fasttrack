import { Recipe } from './recipe';
import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeManagerService {
  recipes = [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'nv'
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v'
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv'
    },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v'
    },
  ];

  constructor(private loggingService: LoggingService) { }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.loggingService.log('recipe added');
  }
}
