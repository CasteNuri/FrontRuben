import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'http://localhost:8080/product';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return (this.http.get(`${SERVER}/all`));
  }

  postProduct(product) {
    return (this.http.post(SERVER, product));
  }

  deleteProduct(id: any) {
    return (this.http.delete(`${SERVER}/${id}`));
  }
}
