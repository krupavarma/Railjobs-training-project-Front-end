import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  number:number;
  navIsFixed:boolean;
tabs=[
  {
    "id":1,
    "name":"Home",
    "router":"home"
  },
  {
    "id":2,
    "name":"About Us"
  },
  {
    "id":3,
    "name":"Job Seeker"
  },
  {
    "id":4,
    "name":"Recruiter"
  },
  {
    "id":5,
    "name":"Training"
  },
  {
    "id":6,
    "name":"Consultancy"
  }

]
  constructor( @Inject(DOCUMENT) private document: Document) { }
 
  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.number > 10) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && this.number < 10) {
      this.navIsFixed = false;
    }
  }

}
