import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatDialogModule,MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
  user = new User();
  
  constructor(public dialog: MatDialog) {
    
}
openDialog() {
  const dialogRef = this.dialog.open(DialogAddUserComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog result: ', result);
  });
}
}
