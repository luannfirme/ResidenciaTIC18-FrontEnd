import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

}