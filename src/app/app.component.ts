import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { LoggingService } from './logging.service';
import { RecipeManagerService } from './recipe-manager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService, RecipeManagerService]
})
export class AppComponent implements OnInit {
  recipes = [];
  constructor(
    private loggingService: LoggingService,
    private recipeManagerService: RecipeManagerService) {

  }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }
}
