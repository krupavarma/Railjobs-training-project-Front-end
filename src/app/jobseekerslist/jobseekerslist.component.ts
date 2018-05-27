import { appliedSeekersLogServices } from './../services/recruiter/seekersListServices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekerslist',
  templateUrl: './jobseekerslist.component.html',
  styleUrls: ['./jobseekerslist.component.scss']
})
export class JobseekerslistComponent implements OnInit {
details;
  constructor(private appliedSeekersLogServices:appliedSeekersLogServices) {
    var email=sessionStorage.email;
    this.appliedSeekersLogServices.appliedSeekersLogs(email).subscribe(response=>{
      console.log(response);
      var de=response.json();
this.details=de.result;
    })
   }

  ngOnInit() {
  }

}
