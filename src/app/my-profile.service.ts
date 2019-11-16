import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private http: HttpClient) { }
  getProfile() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:1020/profile/get';
    return this.http.get(url, {headers});
  }
}
