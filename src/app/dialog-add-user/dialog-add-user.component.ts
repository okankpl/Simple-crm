import { Component } from '@angular/core';
import { MatDialogModule ,MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule,
    UserComponent,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(@Inject(Firestore) private firestore: Firestore,public dialogRef: MatDialogRef<DialogAddUserComponent>,) {
    this.birthDate = new Date();
  }
 
  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
    this.loading = true;
    try {
      const result = await addDoc(collection(this.firestore, 'users'), this.user.toJSON());
      console.log('User has been added', result);
      this.loading = false;
    } catch (error) {
      console.error('Error adding user:', error);
    }
    this.loading = false;
    this.dialogRef.close();
  }
}