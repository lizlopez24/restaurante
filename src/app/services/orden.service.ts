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

  getOrdenID(id:any):Observable<any>{
    return this.http.get(`${this.API_ORDEN}/${id}`)
  }
  getOrdenes():Observable<any>{
    return this.http.get(this.API_ORDEN)
  }
  putOrden(orden: any): Observable <any>{
    return this.http.put(`${this.API_ORDEN}/${orden.mesa}`, orden)
  }

  deleteProducto(id: any): Observable<any> {
    return this.http.delete(`${this.API_ORDEN}/${id}`);
  }

}
