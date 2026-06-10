import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  user : any  = null;

  constructor(private authservice : AuthService){

    this.authservice.user$.subscribe( user =>{
      this.user = user;
    });
  }

}
