import { Component, OnInit } from '@angular/core';
import { MasumService } from '../../Services/masum.service';
import { TokenService } from '../../Services/token.service';

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
    private Token:TokenService
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
 }
  handleError(error){
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
