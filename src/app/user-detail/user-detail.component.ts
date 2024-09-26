import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIcon, MatIconModule, MatDialogModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    @Inject(Firestore) private firestore: Firestore,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id !== null) {
        this.userId = id;
        console.log('Die Benutzer-ID ist:', this.userId);

        const userDocRef = doc(this.firestore, 'users', this.userId);
        docData(userDocRef).subscribe(userData => {
          this.user = new User(userData);
          console.log('Benutzerdaten sind:', this.user);
        });
      } else {
        console.error('Keine Benutzer-ID in den Routenparametern gefunden.');
      }
    });
  }

  openAddressDialog() {

  }

  editUserDetail() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }

  editMenu() {
    this.dialog.open(DialogEditAddressComponent);
  }
}
