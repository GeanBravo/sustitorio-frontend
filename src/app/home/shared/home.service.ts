import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl: string = 'http://localhost:8089';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getProductos() {
    return this.httpClient.get(`${this.apiUrl}/productos`);
  }

  saveProducto(data: any) {
    return this.httpClient.post(`${this.apiUrl}/productos`, data);
  }
}
