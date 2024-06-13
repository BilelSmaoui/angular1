import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (1) (1) (1)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthS:AuthService, private router:Router){}
  sign(): void
  {
    //
    this.AuthS.doGoogleLogin().then(()=>{
      //redirection vers la page des membres
      this.router.navigate(['/member'])
    })

  }
}
