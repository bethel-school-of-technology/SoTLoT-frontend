import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'
import { AuthService} from '../auth.service'

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  recipes: Recipe[]

    constructor(private recipeService: RecipeService, public authService: AuthService) { }

    ngOnInit() {
      this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.map(e => {return {id: e.payload.doc.id, ...e.payload.doc.data() as Recipe}})})}
}


