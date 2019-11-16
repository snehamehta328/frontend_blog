import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../getuser.service';
import {Router} from '@angular/router';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private service: GetuserService, private router: Router, private followservice: FollowService) { }
users;
  ngOnInit() {
    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
follower(id1) {
    this.followservice.followUser(id1).subscribe((data) => {
    });
    this.router.navigate(['/homepage'], {queryParams: {id: id1}});
}
}
