import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { User } from '../shared/services/user';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  recipes: Recipe[];
  user: User;
  userRecipes: Recipe[];
  search: string;
  public isMobile: boolean = false;

    constructor(private recipeService: RecipeService, public authService: AuthService, private breakpointObserver: BreakpointObserver) {
      breakpointObserver.observe([
        Breakpoints.Handset
      ]).subscribe(result => {
        this.isMobile = result.matches;
      });
    }

    getUserRecipes() : void {
      this.recipeService.getUserRecipes(this.user.uid).subscribe(
        r => this.recipes = r
      );
      this.search = ""
    }

    searchUserRecipes(search) : void { 
      this.recipeService.getUserRecipeSearch(search, this.user.uid).subscribe(
        r => this.recipes = r
      );
    }

    deleteUserRecipe(recipe: string, uid: string): void {
      if (confirm("Are you sure you want to delete this recipe? This request cannot be undone.")) {
        this.recipeService.deleteUserRecipe(recipe, uid).subscribe(r => this.getUserRecipes());
      }
    }

    ngOnInit() {
      this.authService.afAuth.authState.subscribe( userdata => {
        if (userdata) { this.user = userdata };
        this.getUserRecipes();
      });
    }
}


