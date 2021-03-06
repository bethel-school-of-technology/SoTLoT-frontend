import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SavedRecipesComponent} from './saved-recipes/saved-recipes.component';
import {RecipebookDetailComponent} from './recipebook-detail/recipebook-detail.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'savedrecipes', component: SavedRecipesComponent},
  {path: 'savedrecipes/:id', component: RecipebookDetailComponent},
  {path: 'recipes/:id', component: RecipeDetailsComponent},
  {path: 'savedrecipes/edit/:id', component: RecipeEditComponent},
  {path: 'addrecipe', component: AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
