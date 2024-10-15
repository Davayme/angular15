import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  private readonly adminUsername = 'admin';
  private readonly adminPassword = '1234';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    
    if (username === this.adminUsername && password === this.adminPassword) {
      this.router.navigate(['/main']);  
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
