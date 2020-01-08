import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from './../recipe-manager.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  providers: []
})
export class HomeComponentComponent implements OnInit {

  recipes = [];
  constructor(
    private recipeManagerService: RecipeManagerService) {
  }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }

}
