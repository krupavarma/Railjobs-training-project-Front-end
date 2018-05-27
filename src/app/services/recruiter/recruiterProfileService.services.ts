import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class recruiterProfileServices{
    constructor(private http:Http){
        
    }
recruiterprofile(email){
            return this.http.get("http://localhost:30124/api/recruiterProfile/"+email);
        
        }

     
}