import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { User } from '../shared/services/user'

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  recipes: Recipe[];
  user: User;

    constructor(private recipeService: RecipeService, public authService: AuthService) { }

    getUserRecipes() : void {
      this.recipeService.getUserRecipes(this.user.uid).subscribe(
        r => this.recipes = r
      );
    }

    ngOnInit() {
      this.authService.afAuth.authState.subscribe( userdata => {
        if (userdata) { this.user = userdata };
        this.getUserRecipes();
      });
    }
}


