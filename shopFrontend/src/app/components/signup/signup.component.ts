import { Component, OnInit } from '@angular/core';
import { MasumService } from '../../Services/masum.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'router',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null

  };
  public error=null;
  constructor(
    private Masum:MasumService,
    private Token:TokenService,
    private router:Router
    ) { }
  onSubmit(){
    this.Masum.signup(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error) 
    );
  }
  handleResponse(data)
  {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  handleError(error){
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
