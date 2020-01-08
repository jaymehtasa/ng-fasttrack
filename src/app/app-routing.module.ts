import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { RecipeResolver } from './recipes/recipe-resolver.service';

const appRoute: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'add-new', component: NewRecipeComponent, canActivate: [AuthGuard] },
  {
    path: 'recipes', component: RecipesComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: RecipeCellComponent, resolve: { recipe: RecipeResolver } }
    ]
  },
  { path: 'recipe/:id', component: RecipeCellComponent },
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
