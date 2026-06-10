import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  firstName: string = '';

  constructor(private authService: AuthService,private router: Router) {

    this.authService.user$
      .subscribe(user => {
        console.log(user);
        if(user){
          this.firstName = user.firstName;
        }

      });

  }

  logout(){
    this.firstName = '';
    this.router.navigate(['/']);
  }
}