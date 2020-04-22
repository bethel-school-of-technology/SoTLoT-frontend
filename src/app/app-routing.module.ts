import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SavedRecipesComponent} from './saved-recipes/saved-recipes.component';
import {RecipebookDetailComponent} from './recipebook-detail/recipebook-detail.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';


const routes: Routes = [
  {path: 'recipes', component: RecipesListComponent},
  {path: 'login', component: SignInComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'savedrecipes', component: SavedRecipesComponent},
  {path: 'savedrecipes/:id', component: RecipebookDetailComponent},
  {path: 'recipes/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
