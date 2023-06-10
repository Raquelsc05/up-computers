import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private SnackBar: MatSnackBar
  ) { }

  notification (mensagem: string) {
    this.SnackBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"

    });
  }
}
