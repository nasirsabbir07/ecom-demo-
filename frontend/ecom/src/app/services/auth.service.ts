import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:4000';

  // isLoggedIn = false;
  constructor(private http: HttpClient) {}

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  login(useremail: string, userpassword: string) {
    this.getUsers().subscribe(
      (data: User[]) => {
        console.log('Received data:', data); // Log the received data

        if (Array.isArray(data)) {
          const foundUser = data.find((user: any) => {
            return user.email === useremail && user.password === userpassword;
          });

          if (foundUser) {
            console.log('User found:', foundUser);
            // Perform actions for successful login
          } else {
            console.log('User not found');
            // Handle unsuccessful login
          }
        } else {
          console.log('Invalid data format');
          // Handle unexpected data format
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
        // Handle error scenario
      },
    );
  }
}
