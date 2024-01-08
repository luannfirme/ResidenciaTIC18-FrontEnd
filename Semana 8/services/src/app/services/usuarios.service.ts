import { Injectable } from '@angular/core';

//@Injectable()


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private usuarios = [
    { login: 'root', password: '1234' },
    { login: 'abutre', password: '12345' },
  ];

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

  addUsuario(login: string, password: string) {
    let usuario;
    usuario = { login: login, password: password };
    this.usuarios.push(usuario);
  }
}
