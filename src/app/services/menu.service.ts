import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  private API_MENU='http://localhost:9000/productos'

  postMenu(producto:any):Observable<any>{
    return this.http.post(this.API_MENU,producto)
  }
  getMenu():Observable<any>{
    return this.http.get(this.API_MENU)
  }

}
