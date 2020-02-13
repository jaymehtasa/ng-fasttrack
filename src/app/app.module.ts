import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { HighLightDirective } from './highlight.directive';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RecipeResolver } from './recipes/recipe-resolver.service';
import { RecipeManagerService } from './recipe-manager.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    NewRecipeComponent,
    RecipeCellComponent,
    HighLightDirective,
    HomeComponentComponent,
    RecipesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, RecipeResolver, RecipeManagerService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
