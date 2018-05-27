import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobseekerforgotPasswordServices{
    constructor(private http:Http){
        
    }
jobseekerforgot(email){
            return this.http.post("http://localhost:30124/api/forgotPassword",email);
        
        }

     
}