import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private http:HttpClient) { }

  private API_ORDEN='http://localhost:3000/producto'

  postOrden(orden:any):Observable<any>{
    return this.http.post(this.API_ORDEN,orden)
  }
  
  getOrdenes():Observable<any>{
    return this.http.get(this.API_ORDEN)
  }

}
