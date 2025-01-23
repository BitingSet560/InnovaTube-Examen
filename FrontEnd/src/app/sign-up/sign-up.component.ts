import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../models/usuario.model';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';


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
export class SignUpComponent{
  signUpForm: FormGroup;
  siteKey = '6LcjVcEqAAAAAGwFv-bnL4IBigOqbUWXm5dI-jWM'; // Reemplaza con tu clave de sitio

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.signUpForm.valid) {
      // Obtener el token de reCAPTCHA
      const recaptchaToken = await window.grecaptcha.execute(this.siteKey, { action: 'signUp' });

      // Datos del formulario más el token de reCAPTCHA
      const formData = {
        ...this.signUpForm.value,
        recaptchaToken,
      };

      // Enviar datos al backend
      this.http.post('http://localhost:3000/api/auth/register', formData).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
        },
        error: (err) => {
          console.error('Error al registrar usuario:', err);
        },
      });
    }
  }
}