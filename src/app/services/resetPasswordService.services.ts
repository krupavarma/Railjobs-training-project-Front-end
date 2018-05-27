import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class resetPasswordServices{
    constructor(private http:Http){
        
    }
resetPassword(id){
            return this.http.get("http://localhost:30124/api/resetPassword/"+id);
        
        }

     
}