import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { User } from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editRecipe: Recipe = new Recipe();
  user:  User;
  
 
  updateRecipe(){
    this.recipeService.updateRecipe(this.editRecipe, this.user.uid, this.editRecipe.id)
    .subscribe(r => this.router.navigate(["/savedrecipes/" + r]));
  };

  backClicked() {
    this.location.back();
  }

  constructor(private recipeService: RecipeService, 
    public authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe(userdata => {
      if (userdata) {this.user = userdata};
      this.route.params.subscribe(param => {
      this.recipeService.getUserRecipe(param["id"], this.user.uid)
      .subscribe(r => (this.editRecipe = r));
    });

    });
  }
}
