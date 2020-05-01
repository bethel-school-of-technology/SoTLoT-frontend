import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'
import { AuthService } from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'firebase';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipes: Recipe[]
  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;
  user: User;
  ingredients: Recipe[]
  instructions: Recipe[]



  getRecipe(): void {
    this.recipeService.getRecipe(this.recipe.id).subscribe(
      r => this.recipe = r
    );
  }

  saveRecipe(): void {
    let dateObject = {timeStamp: new Date}
    this.recipeService.saveRecipe(this.recipe.id, this.user.uid, dateObject).subscribe(
      r => this.router.navigate(['savedrecipes/' + r]));
  }


  ngOnInit() {
    this.authService.afAuth.authState.subscribe( userdata => {
      if (userdata) { this.user = userdata };
    });
    this.route.params.subscribe(param => {
      this.recipeService.getRecipe(param["id"])
      .subscribe(r => (this.recipe = r)

      )
    })
  }
}