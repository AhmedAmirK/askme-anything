import { Component } from '@angular/core';
import {UpperCasePipe}  from "@angular/common";
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  state = 'active';
  clicked(event) {
  event.target.classList.remove('active');
  };
  savedURL;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(['/']); // Navigate back to home page
  }


}
