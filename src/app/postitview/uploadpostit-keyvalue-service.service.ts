import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { postIt } from '../app.component';

@Injectable()
export class UploadpostitKeyvalueServiceService {
  apiKEY : string = '/userpostitapp';
  apiURL : string = 'https://api.keyvalue.xyz/';
  constructor(private http: HttpClient, ) { }
  public upload(keyUser : string, data : Array<postIt>): Observable<Object> {
    return this.http.post(this.apiURL+keyUser+this.apiKEY,data);
  }
}