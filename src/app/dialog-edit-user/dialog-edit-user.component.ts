import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { Firestore, updateDoc, doc } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,  // Wichtig für den Datepicker
    MatDatepickerModule,  // Wichtig für den Datepicker
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  loading = false;
  birthDate: Date = new Date();
  userId: string = '';

  constructor(
    @Inject(Firestore) private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
  ) {}

  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
  }

  async saveUser() {
    try {
      this.user.birthDate = this.birthDate.getTime();
      const userDocRef = doc(this.firestore, 'users', this.userId);
      await updateDoc(userDocRef, this.user.toJSON());
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Benutzers:', error);
    }
    this.loading = false;
    this.dialogRef.close();
  }
}