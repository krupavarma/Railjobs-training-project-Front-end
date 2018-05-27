import { recruiterRegistrationServices } from './../services/recruiter/recruiterRegistrationService.services';
import { Router } from '@angular/router';
import { router } from './../app.router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiterregistration',
  templateUrl: './recruiterregistration.component.html',
  styleUrls: ['./recruiterregistration.component.scss']
})
export class RecruiterregistrationComponent implements OnInit {

  hide=true;
  basicDetails:any;
personalDetails:any;
professionalDetails:any;
roleName="recruiter";
basicd:any;
personald:any;
professionald:any;

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
    'role':'recruiter',
    'details':{
      'email':this.basicDetails.email,
      'password':this.basicDetails.password,
      'userName':this.basicDetails.userName,
      'mobile':this.basicDetails.mobile,
      'homeTown':this.personalDetails.homeTown,
      'qualification':this.personalDetails.qualification,
      'maritalStatus':this.personalDetails.maritalStatus,
      'nationality':this.personalDetails.nationality,
      'companyLocation':this.professionalDetails.companyLocation,
      'experience':this.professionalDetails.experience,
      'compnayName':this.professionalDetails.companyName,
      'department':this.professionalDetails.department

    }
  }
  console.log(data);

console.log(typeof(data));

  this.recruiterRegistrationServices.recruiterRegistration(data).subscribe(response=>{
    console.log(response);
    let m=response.json();
    if(m.status==true){
      this.router.navigate(['/index/signin']);
    }
  })
}
  signIn(h){
// this.router.navigate(['/recruiterdashboard']);
  }
  constructor(private router:Router,private recruiterRegistrationServices:recruiterRegistrationServices) { }

  ngOnInit() {
  }

}
