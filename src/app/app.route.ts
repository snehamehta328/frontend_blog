import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {CategoriesComponent} from './categories/categories.component';
import {AddEditBlogComponent} from './add-edit-blog/add-edit-blog.component';
import {AllUsersComponent} from './all-users/all-users.component';


export const MAIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'blogdetails', component: BlogDetailsComponent},
    { path: 'myprofile' , component: MyprofileComponent},
  { path: 'category' , component: CategoriesComponent},
  { path: 'addblog' , component: AddEditBlogComponent},
  { path: 'alluser' , component: AllUsersComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
  ];
