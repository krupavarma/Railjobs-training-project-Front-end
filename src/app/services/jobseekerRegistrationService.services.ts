import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobseekerRegistrationServices{
    constructor(private http:Http){
        
    }
jobseekerRegistration(data){
            return this.http.post("http://localhost:30124/api/jobseekerRegister",data);
        }

      
}