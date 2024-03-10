import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  constructor(private authService: AuthService, private toast: NgToastService,) {}

  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
    this.toast.success({ detail: 'Sucesso !!!', summary: 'Registro realizado com sucesso', sticky: true, position: 'bottomRight', duration: 5000 })
  }
}