import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../getuser.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrls: ['./add-edit-blog.component.scss']
})
export class AddEditBlogComponent implements OnInit {
  name2;
  category;
  image;
  content;
  pid;
  product1;
  uid;
  blog;
  myp;
  constructor(private service: GetuserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getBlogs().subscribe((data) => {
      this.product1 = data;
    });
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.pid = params.get('blogid');
    // })
    // this.service.getBlogsById(this.pid).subscribe((res) => {
    //   this.blog = res;
    //   console.log(this.blog);
    // });
  }

  update(value: any) {
    this.name2 = value;
    console.log(this.name2);
  }

  update2(value: any) {
    this.content = value;
  }

  update3(value: any) {
    this.category = value;
  }

  update4(value: any) {
    this.image = value;
  }

  update5(value: any) {
    this.pid = value;
  }

  update6(value: any) {
    this.uid = value;
  }

  get() {
    this.router.navigate(['/homepage']);
  }

  addBlog() {
    const json = {
      name: this.name2,
      category: this.category,
      image: this.image,
      content: this.content,
      id: this.pid,
      user_id: this.uid,
      active: 1,
    };
    console.log(json);
    this.router.navigate(['/homepage']);
    this.service.addBlog(json).subscribe((data) => {

    });
  }
  //
  editBlog() {
    this.service.editProduct(this.pid, {
      name: this.name2,
      category: this.category,
      image: this.image,
      content: this.content,
      id: this.pid,
      user_id: this.uid,
      active: 1,
    }).subscribe((data) => {
      localStorage.removeItem('edit');
      this.router.navigate(['homepage'], {
        queryParams: {
          id: this.pid
        }
      });
    });
  }
  // editBlog() {
  //   this.service.editProduct(this.pid, this.blog).subscribe(res => {
  //     this.blog = res;
  //     console.log(this.blog);
  //     alert('Blog Updated');
  //   });
  // }
}
