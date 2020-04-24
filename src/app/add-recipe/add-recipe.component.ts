import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'
import { AuthService } from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'firebase';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  newRecipe: Recipe = new Recipe();



  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
