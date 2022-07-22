import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseAPI = 'http://localhost:8080/v1';
  apiUrl = 'http://localhost:8080/v1/clientes';
  status = 'http://localhost:8080/v1/statusCliente';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getClientesWithSize(size: number): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?size=' + size);
  }

  public getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<any>(this.apiUrl + '/' + id);
  }

  public postCliente(cliente: any): Observable<Cliente>{
    return this.httpClient.post<any>(this.apiUrl, cliente, this.httpOptions)
  }

  public statusCliente(id: number): Observable<any>{
    return this.httpClient.put<any>(this.status + '/' + id, this.httpOptions)
  }

}
