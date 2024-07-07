import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<User> {
    return new Observable<User>(observer => {
      setTimeout(() => {
        if (email == "error@error.com") {
          observer.error({message: 'User not found'});
          observer.next();
        } else {
          const user = new User();
          user.email = email;
          user.id = 'userId';
          user.token = 'token';
          observer.next(user);
        }
        observer.complete();
      }, 3000);
    });
  }
}
