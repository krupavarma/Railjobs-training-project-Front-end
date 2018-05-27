import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobseekerProfileServices{
    constructor(private http:Http){
        
    }
jobseekerprofile(email){
            return this.http.get("http://localhost:30124/api/jobseekerProfile/"+email);
        
        }

     
}