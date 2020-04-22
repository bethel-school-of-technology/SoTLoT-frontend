import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/services/user';


@Component({
  selector: 'app-recipebook-detail',
  templateUrl: './recipebook-detail.component.html',
  styleUrls: ['./recipebook-detail.component.css']
})
export class RecipebookDetailComponent implements OnInit {

  recipes: Recipe[]
  constructor(private recipeService: RecipeService, public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;
  user: User;

  getRecipe(): void {
    this.recipeService.getUserRecipe(this.recipe.id, this.user.uid).subscribe(
      r => this.recipe = r
    );
  }
  ngOnInit() {

    this.authService.afAuth.authState.subscribe( userdata => {
      if (userdata) { this.user = userdata };
      this.route.params.subscribe(param => {
        this.recipeService.getUserRecipe(param["id"], this.user.uid)
        .subscribe(r => (this.recipe = r)
  
        )
      })
    });

  }
}