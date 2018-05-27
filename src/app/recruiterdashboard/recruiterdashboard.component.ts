import { Router } from '@angular/router';
import { router } from './../app.router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiterdashboard',
  templateUrl: './recruiterdashboard.component.html',
  styleUrls: ['./recruiterdashboard.component.scss']
})
export class RecruiterdashboardComponent implements OnInit {
logout(){
this.router.navigate(['/index/signin']);
sessionStorage.clear();
}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
