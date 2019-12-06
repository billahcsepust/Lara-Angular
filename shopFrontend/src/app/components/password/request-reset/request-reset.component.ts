import { Component, OnInit } from '@angular/core';
import { MasumService } from '../../../Services/masum.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {

  public form =
  {
    email:null
  };
  constructor(
    private Masum:MasumService,
    private Snotify:SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit()
  {
       this.Masum.sendPasswordResetLink(this.form).subscribe
       (
          data=>this.handleResponse(data),
          error=>this.Snotify.error(error.error.error)
       );
  }

  handleResponse(res)
  {
    console.log(res);
    this.form.email=null;
  }

}
