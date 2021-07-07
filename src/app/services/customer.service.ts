import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://paymelater.azurewebsites.net/api/customers';
  constructor(private http: HttpClient) {
  }

  getCustomerById(id): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  editCustomerById(id: any, customer: any): any {
    return this.http.put(`${this.baseUrl}/${id}`, customer );
  }
  createCustomer(customer: any): any {
    return this.http.post(this.baseUrl, customer);
  }
  deleteCustomerById(id): any{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
