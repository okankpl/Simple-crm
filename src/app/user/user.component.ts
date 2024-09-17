import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule,CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  users: User[] = [];
  
  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    collectionData(usersCollection, { idField: 'id' }).subscribe((changes) => {
      console.log('Received changes from DB', changes);
      this.users = changes as User[]; 
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ', result);
    });
  }
}