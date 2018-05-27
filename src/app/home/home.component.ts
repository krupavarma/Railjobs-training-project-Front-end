import { HomeContent,HomeCard,HomeCard1,ContactUs } from './../models/homecontent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user:any;
userkey:any;
card:any;
card1:any;
contact:any;
  constructor() { 
    this.user = HomeContent;
    this.card=HomeCard;
    this.card1=HomeCard1;
    this.contact=ContactUs;
    console.log(this.contact);
    // console.log(this.card);
    // console.log(this.user);
    var use=this.user;

    
    // console.log(use.users)
  //  this.user.forEach(function(key,val){
  //    console.log(key.users);
  // // this.userkey=key.users;
  //       for(var item in key.users){
          
  //         console.log(item);
  //         // this.item=item; 
    
  //       }

  //  })

  }

  ngOnInit() {
  }

}
