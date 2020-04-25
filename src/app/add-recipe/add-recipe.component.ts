import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFireModule } from '@angular/fire'
import { AuthService } from '../auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  newRecipe: Recipe = new Recipe();
  user: User;

  addRecipe(){
    this.recipeService.addRecipe(this.newRecipe, this.user.uid).subscribe(
      r =>
      this.router.navigate(["savedrecipes/" + r]));
  }

  constructor(private recipeService: RecipeService, private router: Router, public authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe( userdata => {
      if (userdata) { this.user = userdata };
    });
  }

}
