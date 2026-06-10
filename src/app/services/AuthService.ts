import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginModel } from '../models/Login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject =
    new BehaviorSubject<User | null>(null);

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel) {

    return this.http.post<User>(
      'https://dummyjson.com/auth/login',
      loginModel
    ).pipe(

      tap(user => {
        this.userSubject.next(user);
      })

    );
  }

  getCurrentUser(){
    return this.userSubject.value;
  }
}