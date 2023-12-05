import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    this.authService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
  }
}
