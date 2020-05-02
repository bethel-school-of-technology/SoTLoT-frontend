import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/services/user';
import { FormsModule, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-recipebook-detail',
  templateUrl: './recipebook-detail.component.html',
  styleUrls: ['./recipebook-detail.component.css']
})
export class RecipebookDetailComponent implements OnInit {

deleteUserRecipe(recipe: string, uid: string): void {
if (confirm("Are you sure you want to delete this recipe? This request cannot be undone.")) {
  this.recipeService.deleteUserRecipe(recipe, uid).subscribe(r => this.router.navigate(["savedrecipes/"]));
  }
}

  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;
  user: User;
  ingredients: Array<string>;
  instructions: Array<string>;

  ngOnInit() {

    this.authService.afAuth.authState.subscribe( userdata => {
      if (userdata) { this.user = userdata };
      this.route.params.subscribe( param => {
        this.recipeService.getUserRecipe(param["id"], this.user.uid)
        .subscribe(r => (this.recipe = r)

        )
      })
    });

  }
}
