import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { LoginModel } from '../../models/Login.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login{

  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    console.log("Button Clicked");
    console.log(this.loginModel.username);
    this.authService
      .login(this.loginModel)
      .subscribe({

        next: (user) => {

          console.log('Login Successful', user);

          this.router.navigate(['/dashboard']);

        },

        error: (error) => {

          console.log(error);

          alert('Invalid Username or Password');

        }

      });

  }
}