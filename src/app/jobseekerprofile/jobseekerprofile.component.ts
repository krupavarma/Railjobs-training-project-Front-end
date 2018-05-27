import { jobseekerProfileServices } from './../services/jobseekerprofileService.services';
import { Router } from '@angular/router';
import { router } from './../app.router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.scss']
})
export class JobseekerprofileComponent implements OnInit {
  detail;
  info;
  
logout(){
this.router.navigate(['/index/signin']);
sessionStorage.clear();
}
  constructor(private router:Router,private jobseekerProfileServices:jobseekerProfileServices) {

        var email=sessionStorage.email;
 this.jobseekerProfileServices.jobseekerprofile(email).subscribe(response=>{
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
