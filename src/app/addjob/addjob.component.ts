import { Router } from '@angular/router';
import { router } from './../app.router';
import { recruiterAddJobServices } from './../services/recruiter/recruiterAddjobService.services';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.scss']
})
export class AddjobComponent implements OnInit {
data:any;
  
addJob(f1){
  this.data=f1.value;
  // console.log(this.data);
  this.data.email=sessionStorage.email;
  var jobDetails={
    'email':this.data.email,
    'jobDetails':{
      'industry':this.data.industry,
      'position':this.data.position,
      'minExpRequired':this.data.minExpRequired,
      'qualificationRequired':this.data.qualificationRequired,
      'location':this.data.location,
      'noOfPositions':this.data.noOfPositions,
      'ctc':this.data.ctc,
      'companyName':this.data.companyName,
      'contactPerson':this.data.contactPerson,
      'contactNumber':this.data.contactNumber
      

    }
  }
  console.log(jobDetails);
  this.recruiterAddJobServices.recruiterAddJob(jobDetails).subscribe(response=>{
    console.log(response);
  })
}
message="job added";
action="success";
openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }
constructor(private recruiterAddJobServices:recruiterAddJobServices,private router:Router,public snackBar: MatSnackBar) { }
logout(){
  sessionStorage.clear;
this.router.navigate(['./index/signin']);
}
  ngOnInit() {
  }

}
