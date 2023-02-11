import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errors = {
    name: null,
    email: null,
    password: null
  }

  constructor (private router:Router, private auth:AuthenticationService) {}

  onSubmit(form:NgForm) {
    const name = form.value.name
    const email = form.value.email
    const password = form.value.password
    const password_confirmation = form.value.password_confirmation

    this.auth.register(name, email, password, password_confirmation).subscribe((res) => {
      this.router.navigate(['/login'])
    },(err) => {
      this.errors = err.error.errors
      console.log(err.error.errors);
    })
  }
}
