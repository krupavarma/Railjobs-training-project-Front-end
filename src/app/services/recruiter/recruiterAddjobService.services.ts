
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class recruiterAddJobServices{
    constructor(private http:Http){
        
    }
recruiterAddJob(data){
            return this.http.post("http://localhost:30124/api/addJob",data);
        
        }

     
}