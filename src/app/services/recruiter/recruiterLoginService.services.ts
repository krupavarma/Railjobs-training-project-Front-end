import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class recruiterLoginServices{
    constructor(private http:Http){
        
    }
recruiterLogin(data){
            return this.http.post("http://localhost:30124/api/recruiterLogin",data);
        
        }

     
}