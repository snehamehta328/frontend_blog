import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddEditBlogComponent } from './add-edit-blog/add-edit-blog.component';
import { FollowingComponent } from './following/following.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    BlogDetailsComponent,
    MyprofileComponent,
    CategoriesComponent,
    AddEditBlogComponent,
    FollowingComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
