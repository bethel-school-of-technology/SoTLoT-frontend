import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component'
import {SignInComponent} from './sign-in/sign-in.component'
import {SavedRecipesComponent} from './saved-recipes/saved-recipes.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesListComponent},
  {path: 'login', component: SignInComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'saved-recipes', component: SavedRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
