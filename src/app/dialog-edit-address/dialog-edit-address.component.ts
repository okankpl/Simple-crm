import { Component, OnInit } from '@angular/core';
import { MatDialogModule ,MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component'; 
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatDialogModule,
    UserComponent,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatProgressBarModule,
    CommonModule,
  UserComponent],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent implements OnInit {

  user: User = new User()
  loading = false;
  constructor(@Inject(Firestore) private firestore: Firestore,public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

  }

  ngOnInit(): void {
      
  }

  saveUser() {
    
  }
}
