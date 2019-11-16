import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../getuser.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
product;
Id: number;
  constructor(private service: GetuserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) =>{
      this.Id = data.id;
    });
    return this.service.getById(this.Id).subscribe((data) => {
      this.product = data;
    });
  }

}
