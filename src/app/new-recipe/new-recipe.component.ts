import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeManagerService } from '../recipe-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  form: FormGroup;
  constructor(private recipeManagerService: RecipeManagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      chef: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      image: new FormControl(null),
      type: new FormControl(null),
    });
  }

  onSave() {
    console.log(this.form);
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
