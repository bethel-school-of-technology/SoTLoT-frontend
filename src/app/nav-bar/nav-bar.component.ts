import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {

    const dialogConfig = new MatDialogConfig

    dialogConfig.position = {
      'top': '0',
      right: '0'
    }

    this.dialog.open(UserDialogComponent, dialogConfig)
  }

  ngOnInit(): void {
  }
}
