import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  firstName : string = "";
  constructor(private authservice : AuthService){
    
    this.authservice.user$.subscribe( user => {
      
      if(user){
        this.firstName = user.firstName;
      }
    });

  }


}
