import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Recipe} from './recipe.model'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private firestore: AngularFirestore) { }

  getRecipes() {
    return this.firestore.collection('recipes').snapshotChanges()
  }

  createRecipe(recipe: Recipe) {
    return this.firestore.collection('recipes').add(recipe)
  }

  updateRecipe(recipe: Recipe) {
    delete recipe.id
    this.firestore.doc('recipes/' + recipe.id).update(recipe)
  }

  deleteRecipe(recipeId: string) {
    this.firestore.doc('recipes/' + recipeId).delete()
  }
}
