import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobseekerLoginServices{
    constructor(private http:Http){
        
    }
jobseekerLogin(data){
            return this.http.post("http://localhost:30124/api/jobseekerLogin",data);
        
        }

     
}