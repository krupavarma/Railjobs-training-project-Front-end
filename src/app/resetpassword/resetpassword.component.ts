import { resetPasswordServices } from './../services/resetPasswordService.services';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
reset(){

}
  constructor(private activatedRoute: ActivatedRoute,private resetPasswordServices:resetPasswordServices) {
  this.activatedRoute.queryParams.subscribe(params => {
console.log(params);
this.resetPasswordServices.resetPassword(params.t).subscribe(response=>{
  console.log(response);
})
//do something here
});
   }

  ngOnInit() {
//     this.activatedRoute.queryParams.subscribe(params => {
// console.log(params);
// //do something here
// this.resetPasswordServices.resetPassword(params).subscribe(response=>{
//   console.log(response);
// })
// });
  }

}
