import { Component, OnInit, Input } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})
export class RecipeCellComponent implements OnInit {
  @Input() recipe;
  constructor(
    private recipeManagerService: RecipeManagerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.recipe = this.recipeManagerService.getRecipe(id);
    this.route.params.subscribe((params) => {
      this.recipe = this.recipeManagerService.getRecipe(params.id);
    });
  }
}
