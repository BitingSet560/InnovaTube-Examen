import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {usuario} from '../../models/usuario.model';

@Component({
  selector: 'app-sign-up',
  imports: [   
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  public usuarioPagina: usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    token: ''
  };

  onSubmit() {
    console.log(this.usuarioPagina.nombre);
    console.log(this.usuarioPagina.apellido);
    console.log(this.usuarioPagina.email);
    console.log(this.usuarioPagina.password);
  }
}
