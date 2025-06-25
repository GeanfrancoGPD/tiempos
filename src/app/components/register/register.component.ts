import { Component } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  register(){
      createUserWithEmailAndPassword(this.auth)
  }
}
