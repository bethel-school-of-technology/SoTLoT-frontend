import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Recipe} from './recipe.model'
import { AngularFireStorage } from 'angularfire2/storage'
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AuthService } from './auth.service';
import { User } from './shared/services/user'


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

  saveRecipe(recipe: string, uid: string): Observable<Recipe>{
    return this.http.post<Recipe>(this.url + "/" + recipe + "/add/" + uid, "")
  }

  deleteUserRecipe(recipe: string, uid: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.url + "/users/" + uid + "/" + recipe + "/delete")
  }

  getUser(uid: string): Observable<User>{
    return this.http.get<User>(this.url + "/users/" + uid)
  }

  editRecipe (recipe: string, uid: string): Observable<Recipe>{
    return this.http.put<Recipe>(this.url + "/users/" + uid + "/", recipe);
  }
  
  addRecipe(recipe: Recipe, uid: string): Observable<Recipe>{
    return this.http.post<Recipe>(this.url + "/users/newrecipe/" + uid, recipe);
  }

}
