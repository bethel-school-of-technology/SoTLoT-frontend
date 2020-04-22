import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'
import { AuthService } from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes: Recipe[]
  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;

  getRecipe(): void {
    this.recipeService.getRecipe(this.recipe.id).subscribe(
      r => this.recipe = r
    );
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.recipeService.getRecipe(param["id"])
      .subscribe(r => (this.recipe = r)

      )
    })
  }
}

