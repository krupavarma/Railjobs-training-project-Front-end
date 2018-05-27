import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class recruiterAddJobLogServices{
    constructor(private http:Http){
        
    }
recruiterAddJobLog(email){
            return this.http.get("http://localhost:30124/api/recruiterAddJobLogs/"+email);
        
        }

     
}