import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard/';

import { environment } from '../environments/environment';

import { ReactiveFormsModule } from "@angular/forms";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeService } from './recipe.service';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipebookDetailComponent } from './recipebook-detail/recipebook-detail.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card'





@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    SignInComponent,
    SavedRecipesComponent,
    DashboardComponent,
    RecipeDetailsComponent,
    NavBarComponent,
    RecipebookDetailComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAnalyticsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule

    
  ],
  providers: [RecipeService, AuthService],
  bootstrap: [AppComponent, RecipesListComponent, SignInComponent]
})
export class AppModule { }
