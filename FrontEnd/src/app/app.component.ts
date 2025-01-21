import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent} from '../app/sign-up/sign-up.component';


@Component({
  selector: 'app-root',
  imports: [
   // RouterOutlet, 
   SignUpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
