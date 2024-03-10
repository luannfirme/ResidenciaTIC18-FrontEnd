import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  constructor(private authService: AuthService) {}

  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
  }
}