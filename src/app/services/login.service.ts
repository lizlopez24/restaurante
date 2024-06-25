import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private API_LOGIN='http://localhost:3000/login'
  private API_USERS='http://localhost:3000/users'

  postLogin(user:any):Observable<any>{
    return this.http.post(this.API_LOGIN, user)
  }

  postUser(user:any):Observable<any>{
    return this.http.post(this.API_USERS,user)
  }
  getUsers():Observable<any>{
    return this.http.get(this.API_USERS)
  }
  getUserID(id:any):Observable<any>{
    return this.http.get(`${this.API_USERS}/${id}`)
  }
  putUser(user:any):Observable<any>{
    return this.http.put(`${this.API_USERS}/${user.id}`,user)
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.API_USERS}/${id}`)
  }
}
