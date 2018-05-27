import { jobseekerforgotPasswordServices } from './../services/jobseekerForgotPasswordService.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
forgot(d){
  var uemail=d.value.email;
  var data={
    "email":uemail
  }
  console.log(data);
  this.jobseekerforgotPasswordServices.jobseekerforgot(data).subscribe(response=>{
    console.log(response);
  });
}
  constructor(private jobseekerforgotPasswordServices:jobseekerforgotPasswordServices) { }

  ngOnInit() {
  }

}
