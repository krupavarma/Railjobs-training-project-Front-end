import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobseekerJobsListServices{
    constructor(private http:Http){
        
    }
jobseekerJobsList(data){
            return this.http.get("http://localhost:30124/api/jobseekerJobsList",data);
        
        }

     
}