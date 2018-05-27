import { ReactiveFormsModule, FormControl, Validators,FormGroup } from '@angular/forms';
import { recruiterLoginServices } from './../services/recruiter/recruiterLoginService.services';
import { Router } from '@angular/router';
import { routes } from './../app.router';
import { jobseekerLoginServices } from './../services/jobseekerLoginService.services';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
hide=true;
errMesg;
  constructor(private jobseekerLoginServices:jobseekerLoginServices,private router:Router,private recruiterLoginServices:recruiterLoginServices,public snackBar: MatSnackBar) { }
role:any;
signin(role){
  this.role=role;
}

  jobSeeker(f1){
var jobseekerData=f1.value;
sessionStorage.email=f1.value.email;
// jobseekerData.role=this.role;
console.log(jobseekerData);
this.jobseekerLoginServices.jobseekerLogin(jobseekerData).subscribe(response=>{
  console.log(response);
  var data=response.json();
  var m=data.status;
  this.errMesg=data.message;
  this.openSnackBar();
  if(m==true){
this.router.navigate(['/jobseekerdashboard']);
  }
})
  }

   recruiter(f2){
var recruiterData=f2.value;
sessionStorage.email=f2.value.email;
recruiterData.role=this.role;
console.log(recruiterData);
this.recruiterLoginServices.recruiterLogin(recruiterData).subscribe(response=>{
  console.log(response);
  var data=response.json();
  var m=data.status;
  this.errMesg=data.message;
  this.openSnackBar();
  if(m==true){
this.router.navigate(['/recruiterdashboard']);
  }
})
  }

  forgot(){
    this.router.navigate(['/forgotpassword']);
  }
  openSnackBar() {
    this.snackBar.open(this.errMesg, 'x', {
      duration: 2000,
    });
  }
  ngOnInit() {
  }

}
