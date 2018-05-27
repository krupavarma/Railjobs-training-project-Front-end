import { Router } from '@angular/router';
import { router} from './../app.router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekerdashboard',
  templateUrl: './jobseekerdashboard.component.html',
  styleUrls: ['./jobseekerdashboard.component.scss']
})
export class JobseekerdashboardComponent implements OnInit {

  constructor(private router:Router) { }
logout(){
  this.router.navigate(['/index/signin']);
  sessionStorage.clear();
}
  ngOnInit() {
  }

}
