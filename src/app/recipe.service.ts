import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Recipe} from './recipe.model'
import { AngularFireStorage } from 'angularfire2/storage'
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AuthService } from './auth.service';
import { User } from './shared/services/user'
import { unescapeIdentifier } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  url: string = "https://us-central1-sotlotproject.cloudfunctions.net/api";

  user: User;

  constructor(private http: HttpClient, public authService: AuthService) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url + "/recipes")
  }

  getUserRecipes(uid: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url + "/recipes/" + uid + "/saved")
  }

  getRecipe(recipe: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.url + "/recipes/" + recipe)
  }

  getUserRecipe(recipe: string, uid: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.url + "/users/" + uid + "/" + recipe)
  }

  saveRecipe(recipe: string, uid: string, timeStamp: object): Observable<Recipe>{
    return this.http.post<Recipe>(this.url + "/" + recipe + "/add/" + uid, timeStamp)
  }

  deleteUserRecipe(recipe: string, uid: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.url + "/users/" + uid + "/" + recipe + "/delete")
  }

  getUser(uid: string): Observable<User>{
    return this.http.get<User>(this.url + "/users/" + uid)
  }

  updateRecipe (recipe: Recipe, uid: string, recipeID: string): Observable<Recipe>{
    return this.http.post<Recipe>(this.url + '/update/' + uid + "/" + recipeID, recipe);
  }

  addRecipe(recipe: object, uid: string): Observable<object>{
    return this.http.post<object>(this.url + "/users/newrecipe/" + uid, recipe);
  }

  getRecipeSearch(search: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url + "/recipes/search/" + search);
  }

  getUserRecipeSearch(search: string, uid: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url + "/recipes/search/" + uid + "/" + search);
  }

}
