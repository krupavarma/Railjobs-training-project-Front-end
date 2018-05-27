import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class appliedSeekersLogServices{
    constructor(private http:Http){
        
    }
appliedSeekersLogs(email){
            return this.http.get("http://localhost:30124/api/appliedSeekersLogs/"+email);
        
        }

     
}