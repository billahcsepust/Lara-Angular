import { Component, OnInit } from '@angular/core';
import { MasumService } from '../../Services/masum.service';
import { TokenService } from '../../Services/token.service';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public  form= {
    email: null,
    password:null
    
  };

  public error=null;

  constructor(
    private Masum:MasumService,
    private Token:TokenService,
    private Auth:AuthService,
    private router:Router
    ) { }
  onSubmit(){
    this.Masum.login(this.form)
    .subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
      
    );
  }
 handleResponse(data)
 {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
 }
  handleError(error){
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
