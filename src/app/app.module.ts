import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from "@angular/forms";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeService } from './recipe.service';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent
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
    AppRoutingModule
    
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
