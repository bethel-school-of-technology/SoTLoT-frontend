import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { User } from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from '../auth.service';

import { Location } from '@angular/common';

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  editRecipe: Recipe;
  user: User;
  editForm: FormGroup;

  updateRecipe() {
    this.recipeService.updateRecipe(this.editForm.value, this.user.uid, this.editRecipe.id)
      .subscribe((r) => this.router.navigate(['/savedrecipes/' + this.editRecipe.id]));
  }

  backClicked() {
    this.location.back();
  }

  constructor(
    private recipeService: RecipeService,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.authService.afAuth.authState.subscribe((userdata) => {
      if (userdata) {
        this.user = userdata;
      }
      this.route.params.subscribe((param) => {
        this.recipeService
          .getUserRecipe(param['id'], this.user.uid)
          .subscribe((r) => {
            this.editRecipe = r;
            this.editForm = this.fb.group({
              name: this.editRecipe.name,
              ingredients: this.fb.array(this.editRecipe.ingredients),
              instructions: this.fb.array(this.editRecipe.instructions),
              desc: this.editRecipe.desc,
              cookTime: this.editRecipe.cookTime,
              servingSize: this.editRecipe.servingSize,
              imageLink: this.editRecipe.imageLink,
              timeStamp: new Date
            });
          });
      });
    });
  }
  get ingredientForm() {
    return this.editForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredientForm.push(new FormControl(''));
  }
  deleteIngredient(i) {
    this.ingredientForm.removeAt(i);
  }
///////////////////////////////
  get instructionsForm() {
    return this.editForm.get('instructions') as FormArray;
  }
  addInstructions() {
    this.instructionsForm.push(new FormControl(''));
  }

  deleteInstructions(i) {
    this.instructionsForm.removeAt(i);
  }
}
