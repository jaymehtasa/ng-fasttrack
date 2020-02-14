import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeManagerService } from '../recipe-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './validators';
import { HttpClient } from '@angular/common/http';

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
  constructor(
    private recipeManagerService: RecipeManagerService, private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required, CustomValidators.validRecipeName),
      chef: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
      }),
      image: new FormControl(null),
      type: new FormControl(null, [Validators.required, CustomValidators.validRecipeType]),
      ingredients: new FormArray([])
    });

    this.form.setValue({
      name: 'Dalwada',
      chef: {
        name: 'JM',
        email: 'jm@test.com'
      },
      image: '',
      type: 'veg',
      ingredients: []
    });

    this.form.patchValue({
      name: 'Dalwada by JM'
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.http.get('https://reqres.in/api/users')
      .subscribe((res) => {
        console.log(res);
      });

    this.http.get('https://reqres.in/api/unknown/23', {
      headers: {
        'x-auth-token': 'abc=xyz'
      },
      params: {
        q: 'dal'
      },
      observe: 'response'
    })
      .subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }

  addIngredient() {
    const control = new FormControl(null, Validators.required);
    (this.form.get('ingredients') as FormArray).push(control);
  }

  onSave() {
    console.log(this.form);
    this.http.post('https://reqres.in/api/users', {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    }).subscribe((res) => {
      console.log(res);
    });
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
