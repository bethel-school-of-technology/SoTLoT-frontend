import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { AuthService} from '../auth.service';


@Component({
  selector: 'app-recipebook-detail',
  templateUrl: './recipebook-detail.component.html',
  styleUrls: ['./recipebook-detail.component.css']
})
export class RecipebookDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
