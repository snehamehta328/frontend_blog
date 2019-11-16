import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private httpClient: HttpClient) { }
  followUser(id) {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/follower/follow/' + id, {headers});
  }

  getFollowers() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/follower/allfollow', {headers});
  }
  unfollow(id4) {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/follower/unfollow/' + id4, {headers});
  }
  getFollowing() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/follower/allfollow', {headers});
  }
  getmyFollowers() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/follower/myFollowers', {headers});
  }
}
