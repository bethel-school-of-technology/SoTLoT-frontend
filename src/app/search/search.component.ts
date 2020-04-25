import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';
import { User } from '../shared/services/user'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {

  displayedColumns = ['name'];
 
  ngOnInit(): void {
 }
  searchValue: string = "";
  dataSource: any;
 
  constructor(public afs: AngularFireStorage) {
  }
 
 
 
 
 
  getStudents() {
 this.dataSource = this.dataSource.recipe ('Recipes', ref => ref.where('name', '==', this.searchValue)).valueChanges();
 }
}
