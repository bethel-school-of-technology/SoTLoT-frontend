import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'

@Component({
  selector: 'recipes',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[]
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Recipe;
      })
    });
  }

create(recipe: Recipe){
  this.recipeService.createRecipe(recipe);
}

update(recipe: Recipe) {
  this.recipeService.updateRecipe(recipe);
}

delete(id: string) {
  this.recipeService.deleteRecipe(id);
}



}
