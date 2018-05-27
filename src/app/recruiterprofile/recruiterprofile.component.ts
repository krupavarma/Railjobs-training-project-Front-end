import { recruiterProfileServices } from './../services/recruiter/recruiterProfileService.services'
import { Router } from '@angular/router';
import { router } from './../app.router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recruiterprofile',
  templateUrl: './recruiterprofile.component.html',
  styleUrls: ['./recruiterprofile.component.scss']
})
export class RecruiterprofileComponent implements OnInit {
  detail;
  info;
logout(){
  this.router.navigate(['/index/signin']);
  sessionStorage.clear();
}
  constructor(private router:Router,private recruiterProfileServices:recruiterProfileServices) { 
    var email=sessionStorage.email;
 this.recruiterProfileServices.recruiterprofile(email).subscribe(response=>{
   console.log(response);
   this.detail=response.json();
    this.info=this.detail.result;
    console.log(this.info);
    console.log(typeof(this.info));
 })
 



  }

  ngOnInit() {
  }

}
