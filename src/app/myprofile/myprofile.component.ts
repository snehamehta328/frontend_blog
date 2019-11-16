import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyProfileService} from '../my-profile.service';
import {GetuserService} from '../getuser.service';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
username;
password;
myp;
  blog;
  following;
  followers;
  // tslint:disable-next-line:max-line-length
  constructor(private appservice: AppService, private router: Router, private http: HttpClient, private abc: MyProfileService, private service: GetuserService, private followservice: FollowService) { }
  disabled = true;
  url = 'http://localhost:1020/profile/update';
  ngOnInit() {
    this.abc.getProfile().subscribe(data => {
      this.myp = data;
    });
    this.service.getMyBlogs().subscribe((data2) => {
      this.blog = data2;
    });
    this.followservice.getFollowing().subscribe((data3) => {
      this.following = data3;
    });
    this.followservice.getmyFollowers().subscribe((data4) => {
      this.following = data4;
    });
  }
  logout() {
    this.appservice.isLoggedin(false);
    this.router.navigate(['login']);
  }
  edit() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/myprofile']);
      alert('Data Edited Successfully');
    });
  }
  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/myprofile']);
      alert('Data Saved Successfully');
    });
  }
  deleteProduct(did: number) {
    this.service.deleteProduct(did).subscribe((data9) => {
        this.blog = data9;
        console.log(did);
      });
  }
  follower(id1) {
    this.followservice.followUser(id1).subscribe((data) => {
    });
    this.router.navigate(['/homepage'], {queryParams: {id: id1}});
  }
  unfollow(id5) {
    this.followservice.unfollow(id5).subscribe((data3) => {
      this.followservice.getFollowers().subscribe((data) => {
        this.followers = data;
      });
    });
  }
}
