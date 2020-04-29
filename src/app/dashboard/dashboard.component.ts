import { Component, OnInit, ElementRef } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { User } from '../shared/services/user'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  recipes: Recipe[];
  userRecipes: Recipe[];
  user: User;
  search: string;

  getRecipes() : void {
    this.recipeService.getRecipes().subscribe(
      r => this.recipes = r
    );
    this.search = ""
  }
  
  searchRecipes(search) : void { 
    this.recipeService.getRecipeSearch(search).subscribe(
      r => this.recipes = r
    );
  }

  saveRecipe(recipe): void {
    this.recipeService.saveRecipe(recipe, this.user.uid).subscribe(
      r => this.getUserRecipes());
  }

  getUserRecipes() : void {
    this.recipeService.getUserRecipes(this.user.uid).subscribe(
      r => this.userRecipes = r
    );
  }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe( userdata => {
      if (userdata) { this.user = userdata };
      this.getUserRecipes();
      this.getRecipes();
    });
  }
}
