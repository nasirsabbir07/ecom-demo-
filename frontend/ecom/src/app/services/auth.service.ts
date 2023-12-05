import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { subscribe } from 'node:diagnostics_channel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  // isLoggedIn = false;
  constructor(private http: HttpClient) {}

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  // }

  // getUsers(): Observable<{ users: User[] }> {
  //   return this.http.get<{ users: User[] }>(`${this.baseUrl}/users`);
  // }

  // login(email: string, password: string): boolean {
  //   this.getUsers().subscribe((data) => {
  //     const foundUser = data.users.find(
  //       (user: { email: string; password: string }) => {
  //         return user.email == email && user.password == password;
  //       }
  //     );

  //     if (foundUser) {
  //       this.isLoggedIn = true;
  //       console.log(foundUser);
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   return false;
  // }

  getUsers(): Observable<{ users: User[] }> {
    return this.http.get<{ users: User[] }>(`${this.baseUrl}/users`);
  }

  login(useremail: string, userpassword: string) {
    this.getUsers().subscribe((data) => {
      const foundUser = data.users.find(
        (user: { email: string; password: string }) => {
          return user.email === useremail && user.password === userpassword;
        }
      );
      if (foundUser) {
        console.log('found user');
      } else {
        console.log('user not found');
      }
    });
  }
}
