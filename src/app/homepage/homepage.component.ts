import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GetuserService} from '../getuser.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
blogs;
category;
  constructor(private router: Router, private service: GetuserService, private appservice: AppService) { }
  ngOnInit() {
    this.service.getBlogs().subscribe((data9) => {
      this.blogs = data9;
    });
  }
  goToBlog(id: number ) {
    this.router.navigate(['/blogdetails'], { queryParams: {id}});
  }
  showFashion() {
    this.category = 'Fashion' ;
    this.service.getProductsByCategory('Fashion').subscribe((data1) => {
      this.blogs = data1;
    });
  }
  showLifestyle() {
    this.category = 'Lifestyle';
    this.service.getProductsByCategory('Lifestyle').subscribe((data2) => {
      this.blogs = data2;
    });
  }
  showMotivation() {
    this.category = 'Motivation';
    this.service.getProductsByCategory('Motivation').subscribe((data3) => {
      this.blogs = data3;
    });
  }
  showTravel() {
    this.category = 'Travel';
    this.service.getProductsByCategory('Travel').subscribe((data4) => {
      this.blogs = data4;
    });
  }
  showFashionn() {
    this.category = 'Fashion' ;
    this.service.getProductsByCategory('Fashion').subscribe((data5) => {
      this.blogs = data5;
    });
  }
  logout() {
    this.appservice.isLoggedin(false);
    this.router.navigate(['login']);
  }
}
