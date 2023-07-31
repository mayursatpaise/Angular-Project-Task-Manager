import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/login-view-model';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {

  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService:LoginService,private router:Router) {
  
}

  ngOnInit() {
  
}  
  onLoginClick() {
    this.loginService.Login(this.loginViewModel).subscribe({
      next: (res) => { 
        this.router.navigateByUrl("/dashboard");
      },
      error: (e) => {
        console.error(e);
        this.loginError = "invalid Username or Password";
      },
      complete: () => console.info('complete') 
     })
  }
  
 
}
