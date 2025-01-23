import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../models/usuario.model';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const usuario: Usuario = {
        nombre: this.signUpForm.value.nombre,
        apellido: this.signUpForm.value.apellido,
        email: this.signUpForm.value.email,
        contrasenia: this.signUpForm.value.password
      };
      console.log(usuario)
      this.authService.register(usuario).subscribe(response => {
        
        console.log('User registered successfully', response);
      });
    }
  }
}