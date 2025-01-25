import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component'
import { VideosComponent }  from './videos/videos.component'
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'videos', component: VideosComponent , canActivate: [AuthGuard]},
    { path: '', redirectTo:'/login', pathMatch: 'full'}
  ];
  
