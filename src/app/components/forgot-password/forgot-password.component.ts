import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  error = {
    email:null
  }

  message:any
  wait:boolean = false

  constructor(private auth:AuthenticationService) {}

  onSubmit(form:NgForm) {
    this.wait = true
    const email = form.value.email
    console.log(email)
    this.auth.forgot(email).subscribe((res:any)=>{
      this.message = res.message
      this.wait = false
    }, (err)=>{
      this.error = err.error.errors
      this.wait = false
    })
  }
}
