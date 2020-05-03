import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/services/user';
import { FormsModule, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {

  newRecipe: FormGroup;
  user: User;

  constructor(private recipeService: RecipeService, private router: Router, public authService: AuthService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) { }

  addRecipe() {
    this.recipeService.addRecipe(this.newRecipe.value, this.user.uid).subscribe(
      r =>
        this.router.navigate(["savedrecipes/" + r]));
  };

  backClicked() {
    this.location.back();
  }

  addIngredient() {
    this.ingredientForms.push(new FormControl(''));
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i)
  }

  get ingredientForms() {
    return this.newRecipe.get('ingredients') as FormArray
  }

  addInstruction() {
    this.instructionForms.push(new FormControl(''));
  }

  deleteInstruction() {
    let length = this.instructionForms.length
    this.instructionForms.removeAt(length - 1)
  }

  get instructionForms() {
    return this.newRecipe.get('instructions') as FormArray
  }

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe(userdata => {
      if (userdata) { this.user = userdata };
    });

    let date = new Date;

    this.newRecipe = this.fb.group({
      name: "",
      desc: "",
      ingredients: this.fb.array([""]),
      instructions: this.fb.array([""]),
      cookTime: "",
      difficulty: "",
      servingSize: "",
      imageLink: "",
      timeStamp: date
    })

  }

}
