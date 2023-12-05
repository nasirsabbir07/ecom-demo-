import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { error } from 'console';
import { User } from '../../interfaces/auth';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitApplication() {
    const postData = this.applyForm.value;
    this.authService.registerUser(postData as User).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
