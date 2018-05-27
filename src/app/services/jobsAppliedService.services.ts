import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class jobsAppliedService{
    constructor(private http:Http){
        
    }
jobsApplied(data){
            return this.http.post("http://localhost:30124/api/jobsApplied",data);
        
        }

     
}