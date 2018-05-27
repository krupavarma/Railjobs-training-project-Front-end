import { jobsAppliedService } from './../services/jobsAppliedService.services';
import { router } from './../app.router';
import { Router } from '@angular/router';
import { jobseekerJobsListServices } from './../services/jobseekerJobsListService.services';
import {Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort,MatCheckbox} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-jobseekerjoblist',
  templateUrl: './jobseekerjoblist.component.html',
  styleUrls: ['./jobseekerjoblist.component.scss']
})
 export class JobseekerjoblistComponent {
  jobDetails:any;
  ele:any;
  jEmail;
  isActive:boolean;
 displayedColumns = ['companyName', 'industry', 'position', 'location'];

 constructor(private jobseekerJobsListServices:jobseekerJobsListServices,private router:Router,private jobsAppliedService:jobsAppliedService){
   var data;
   this.isActive=true;
  this.jobseekerJobsListServices.jobseekerJobsList(data).subscribe(response=>{
    this.jobDetails=response.json();
    console.log(this.jobDetails.result);
     this.ele=this.jobDetails.result;
  })
 }
// act(){
//   this.isActive=false;
//   console.log(this.isActive);
// }
applyingJob(email,data,index){
 this.jEmail=sessionStorage.email;
console.log(this.jEmail);
  console.log(email);
  console.log(data);
  console.log(index);
   var details={
    'jobseekerEmail':this.jEmail,
      'recruiterEmail':email,
      'companyName':data.companyName,
      'position':data.position,
      'location':data.location,
      'recruiterContactNumber':data.contactNumber,
      'industry':data.industry
   }
    console.log(details);
this.jobsAppliedService.jobsApplied(details).subscribe(response=>{
  console.log(response);
})
}

}

