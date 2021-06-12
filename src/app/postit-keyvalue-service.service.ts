import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostItKeyValueService {
  apiKEY : string = '/userpostitapp';
  apiURL : string = 'https://api.keyvalue.xyz/';
  constructor(private http: HttpClient) { }
  public getData(keyUser : string): Observable<Object> {
    return this.http.get(this.apiURL+keyUser+this.apiKEY);
  }
}