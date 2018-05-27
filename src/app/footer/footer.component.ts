import { FooterContent } from './../models/footercontent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
content:any;
  constructor() {
    this.content=FooterContent;
   }

  ngOnInit() {
  }

}
