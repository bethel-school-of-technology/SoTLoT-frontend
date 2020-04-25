import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { User } from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editRecipe: Recipe = new Recipe();
  user:  User;
  
  saveRecipe(recipe) {
    this.recipeService.editRecipe(recipe, this.user.uid)
    .subscribe(r => this.router.navigate(['saved-recipes']));
  }

  constructor(private recipeService: RecipeService, 
    public authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(userdata => {
      if (userdata) {this.user = userdata};
      this.route.params.subscribe(param => {
      this.recipeService.getUserRecipe(param["id"], this.user.uid)
      .subscribe(r => (this.editRecipe = r));
    });

    });
  }
}
