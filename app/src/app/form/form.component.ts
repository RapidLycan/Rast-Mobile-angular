import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: any) {
    this.snackBar.open(message);
  }
}
