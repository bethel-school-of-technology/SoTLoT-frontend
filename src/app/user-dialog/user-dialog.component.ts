import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog"
import { AuthService} from '../auth.service'
import { User } from '../shared/services/user'
import { RecipeService } from 'src/app/recipe.service';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  user: User[]
  constructor(public recipeService: RecipeService, public authService: AuthService, private dialogRef: MatDialogRef<UserDialogComponent>) { }

  

  ngOnInit(): void {
  }
  
  close() {
    this.dialogRef.close()
  }
}
