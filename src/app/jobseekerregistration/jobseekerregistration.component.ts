
import { jobseekerRegistrationServices } from './../services/jobseekerRegistrationService.services';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { router } from './../app.router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekerregistration',
  templateUrl: './jobseekerregistration.component.html',
  styleUrls: ['./jobseekerregistration.component.scss']
})
export class JobseekerregistrationComponent implements OnInit {
hide=true;
basicDetails:any;
personalDetails:any;
professionalDetails:any;
roleName="jobseeker";
basicd:any;
personald:any;
professionald:any;
errMesg;
action=""
  signIn(g){
// this.router.navigate(['/jobseekerdashboard']);
  }

  
basic(f1){
  
  this.basicDetails=f1.value;
  console.log(this.basicDetails);
  
}
personal(f2){
  this.personalDetails=f2.value;
  console.log(this.personalDetails);
  
}
professional(f3){
  this.professionalDetails=f3.value;
  console.log(this.professionalDetails); 
  var data={
    'role':'jobseeker',
    'details':{
      'email':this.basicDetails.email,
      'password':this.basicDetails.password,
      'userName':this.basicDetails.userName,
      'mobile':this.basicDetails.mobile,
      'homeTown':this.personalDetails.homeTown,
      'qualification':this.personalDetails.qualification,
      'maritalStatus':this.personalDetails.maritalStatus,
      'nationality':this.personalDetails.nationality,
      'preferableLocation':this.professionalDetails.preferableLocation,
      'experience':this.professionalDetails.experience,
      'designation':this.professionalDetails.designation,
      'department':this.professionalDetails.department

    }
  }
  console.log(data);

console.log(typeof(data));

  this.jobseekerRegistrationServices.jobseekerRegistration(data).subscribe(response=>{
    console.log(response);
    let m=response.json();
    if(m.status==true){
      // this.router.navigate(['/index/signin']);
      // this.errMesg=m.message;
    }
    else{
      this.errMesg=m.message;
      console.log(this.errMesg);
      this.openSnackBar(this.errMesg, this.action);
    }
  })
}
openSnackBar(errMesg,action) {
    this.snackBar.open(this.errMesg, this.action, {
      duration: 2000,
     
    });
  }
  constructor(private router:Router,private jobseekerRegistrationServices:jobseekerRegistrationServices,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
