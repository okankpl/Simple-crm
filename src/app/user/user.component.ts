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
import { Firestore, collection, valueChanges } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  users: User[] = [];
  
  constructor(public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    valueChanges(usersCollection).subscribe((changes: User[]) => {
      console.log('Received changes from DB', changes);
      this.users = changes; // Update the users array with the latest data
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ', result);
    });
  }
}