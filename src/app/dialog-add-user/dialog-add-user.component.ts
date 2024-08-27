import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule,UserComponent,MatButtonModule,FormsModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user = new User();
  birthDate: Date;

  constructor() {
    this.birthDate = new Date(); 
  }

  onNoClick() {

  }
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
  }
}
