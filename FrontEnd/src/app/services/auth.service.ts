import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Para realizar acciones con el flujo de datos
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://backend:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  //Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); 
  }

  //Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token && !this.isTokenExpired(token);
  }

  //Obtener información del token (opcional)
  getUserInfo(): any {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken ? decodedToken.user : null;
    }
    return null;
  }

  //Verificar si el token ha expirado
  private isTokenExpired(token: string): boolean {
    const decodedToken = this.decodeToken(token);
    if (decodedToken && decodedToken.exp) {
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp < currentTime;
    }
    return true;
  }

  //Decodificar el token
  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
}
