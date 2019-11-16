import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../getuser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
blogs;
  constructor(private service: GetuserService, private router: Router) { }

  ngOnInit() {
    this.service.getBlogs().subscribe((data9) => {
      this.blogs = data9;
    });
  }
  goToBlog(id: number ) {
    this.router.navigate(['/blogdetails'], { queryParams: {id}});
  }

}
