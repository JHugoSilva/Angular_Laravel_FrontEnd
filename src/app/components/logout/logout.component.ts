import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  checkbox:boolean = false

  constructor(private router:Router, private auth:AuthenticationService) {}
  logout() {
    this.auth.logout(this.checkbox).subscribe((res)=>{
      localStorage.removeItem('user')
      this.auth.toggleLogin(false)
      this.router.navigate(['/'])
    },(err)=>{
      console.log(err)
    })
  }
}
