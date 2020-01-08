import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})
export class RecipeCellComponent implements OnInit, OnDestroy {
  @Input() recipe;
  private paramSubs: Subscription;

  constructor(
    private recipeManagerService: RecipeManagerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.recipe = this.recipeManagerService.getRecipe(id);
      this.paramSubs = this.route.params.subscribe((params) => {
        this.recipe = this.recipeManagerService.getRecipe(params.id);
      });
    }
  }

  ngOnDestroy() {
    if (this.paramSubs) {
      this.paramSubs.unsubscribe();
    }
  }
}
