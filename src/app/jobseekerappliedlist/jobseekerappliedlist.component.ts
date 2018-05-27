import { jobsAppliedLogServices } from './../services/jobsAppliedLogService.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekerappliedlist',
  templateUrl: './jobseekerappliedlist.component.html',
  styleUrls: ['./jobseekerappliedlist.component.scss']
})
export class JobseekerappliedlistComponent implements OnInit {
companyName;
location;
recruiterMobile;
position;
details;
  constructor(private jobsAppliedLogServices:jobsAppliedLogServices) { 
    var email=sessionStorage.email;
    this.jobsAppliedLogServices.jobsAppliedLogs(email).subscribe(response=>{
      // console.log(response);
      var de=response.json();
      console.log(de.result);
   this.details=de.result;

    })
  }

  ngOnInit() {
  }

}
