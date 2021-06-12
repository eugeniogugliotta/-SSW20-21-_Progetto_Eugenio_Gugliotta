import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewkeyKeyvalueService {
  apiURL : string = 'https://api.keyvalue.xyz/new/userpostitapp';
  constructor(private http: HttpClient) { }
  public newKey(): Observable<string> {
    return this.http.post(this.apiURL, "", { responseType: "text" });
  }
}
