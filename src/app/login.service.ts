import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLink: string = "http://localhost:9090";
  constructor(private httpClient: HttpClient) { 
    
  }

  currentUserName: string | null = "";

  public Login(LoginViewModel: LoginViewModel): Observable<any>{
   
    return this.httpClient.post<any>(this.urlLink + "/authenticate", LoginViewModel, { responseType: "json" })
      .pipe(map(user => {
        if (user) {
          this.currentUserName = user.UserName;
          sessionStorage['currentUser']= JSON.stringify(user)
        }
        return user;
      }));
  }
  public logout() {
    sessionStorage.removeItem('currentUser')
    this.currentUserName = null;
}
}
