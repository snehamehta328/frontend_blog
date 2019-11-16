import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private appService: AppService) { }
username;
  password;
  yourname;
  email;
  phone;
  ngOnInit() {
  }
  goTosignUp() {
    const user = {
      username: this.username,
      password: this.password,
      yourname: this.yourname,
      email: this.email,
      phone: this.phone
    };
    this.appService.signup(user);
  }
}
