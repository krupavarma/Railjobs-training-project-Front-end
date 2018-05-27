import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobsAppliedLogServices{
    constructor(private http:Http){
        
    }
jobsAppliedLogs(email){
            return this.http.get("http://localhost:30124/api/jobsAppliedLogs/"+email);
        
        }

     
}