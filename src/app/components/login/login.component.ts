import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router:Router, private auth:AuthenticationService) {}

  onSubmit(form:NgForm) {
    const email = form.value.email
    const password = form.value.password

    this.auth.login(email, password).subscribe((res:any)=>{
      localStorage.setItem('user', JSON.stringify(res))
      this.router.navigate(['/dashboard'])
    }, err => {
      console.log(err)
    })

  }
}
