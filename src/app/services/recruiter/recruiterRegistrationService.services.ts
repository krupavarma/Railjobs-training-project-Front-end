import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class recruiterRegistrationServices{
    constructor(private http:Http){
        
    }
recruiterRegistration(data){
            return this.http.post("http://localhost:30124/api/recruiterRegister",data);
        }

      
}