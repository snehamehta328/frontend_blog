import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor(private httpClient: HttpClient) { }
  getBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/api/blogdetails', {headers});
  }
  getById(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/api/par/' + id , {headers});
  }
  getProductsByCategory(category: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/api/getProductsByCategory/' + category, {headers});
  }
  getMyBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/profile/getCurrentUserBlog', {headers});
  }
  addBlog(data) {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:1020/api/addblog', data, {headers});
  }
  deleteProduct(did) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/api/del/' + did, {headers});
  }
  getAllUsers() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:1020/login/getUser', {headers});
  }
  editProduct(id, data) {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:1020/api/blo/' + id, data, {headers});
  }
}
