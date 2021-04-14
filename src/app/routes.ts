import {Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {PmlComponent} from './pml/pml.component';
import {DetailsCustomersComponent} from './details-customers/details-customers.component';
import {CreditoComponent} from './credito/credito.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ProductsComponent} from './products/products.component';
import {TerminosComponent} from './terminos/terminos.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import { SoporteComponent } from './soporte/soporte.component';



export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pml', component: PmlComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'detailscustomers/:id', component: DetailsCustomersComponent},
  {path: 'credito/:id', component: CreditoComponent},
  {path: 'addcustomer', component: AddCustomerComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'editcustomer/:id', component: EditCustomerComponent}
];
