import { Component, OnInit } from '@angular/core';
import { MasumService } from '../../Services/masum.service';

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
  constructor(private Masum:MasumService) { }
  onSubmit(){
    this.Masum.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error) 
    );
  }

  handleError(error){
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
