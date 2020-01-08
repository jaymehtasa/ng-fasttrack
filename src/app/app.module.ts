import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { HighLightDirective } from './highlight.directive';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoute: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'add-new', component: NewRecipeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewRecipeComponent,
    RecipeCellComponent,
    HighLightDirective,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
