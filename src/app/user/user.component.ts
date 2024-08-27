import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
  user = new User();
  
  constructor(public dialog: MatDialog) {
    
}
openDialog() {
  this.dialog.open(DialogAddUserComponent);
}
}
