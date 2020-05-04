import { Component, OnInit, ElementRef } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { User } from '../shared/services/user'
import { Router, ActivatedRoute } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit {
  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private snackBar: MatSnackBar) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  recipes: Recipe[];
  userRecipes: Recipe[];
  user: User;
  search: string;
  public isMobile: boolean = false;




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

  saveRecipe(recipe, message, action): void {
    let dateObject = {timeStamp: new Date}
    this.recipeService.saveRecipe(recipe, this.user.uid, dateObject).subscribe(
      r => this.getUserRecipes());
      this.snackBar.open(message, action, {duration: 2000});
      
 
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
