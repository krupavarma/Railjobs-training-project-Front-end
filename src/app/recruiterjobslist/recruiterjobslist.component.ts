import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { router } from './../app.router';
import { recruiterAddJobLogServices } from './../services/recruiter/recruiterAddJobLogServices.service';


import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-recruiterjobslist',
  templateUrl: './recruiterjobslist.component.html',
  styleUrls: ['./recruiterjobslist.component.scss']
})
export class RecruiterjobslistComponent {
  jobDetails:any;
  ele:any;
 displayedColumns = ['companyName', 'industry', 'position', 'location'];
//  dataSource = new ExampleDataSource();
 constructor(private recruiterAddJobLogServices:recruiterAddJobLogServices,private router:Router){
   var email=sessionStorage.email;
  this.recruiterAddJobLogServices.recruiterAddJobLog(email).subscribe(response=>{
    this.jobDetails=response.json();
    console.log(this.jobDetails.result);
     this.ele=this.jobDetails.result;
    // console.log(this.jobDetails.result.jobDetails);
  })
 }

addJob(){
  // console.log(event);
  this.router.navigate(['/recruiterdashboard/addjob']);

}
applyingJob(event){
  console.log(event.path[2]);
}
}

