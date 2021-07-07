import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://paymelater.azurewebsites.net/api/products';
  constructor(private http: HttpClient) {
  }
  getProduct(): any{
    return this.http.get(this.baseUrl);
  }
}
