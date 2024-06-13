import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (1) (1) (1)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
user!:any;
  constructor(private authService:AuthService,private router:Router){
    this.authService.getUserClaims().then((a)=>{
      this.user=a;

    })
  }
logout():void{
  this.authService.doLogout().then(()=>{
    this.router.navigate(['/login'])
  })
}
}
