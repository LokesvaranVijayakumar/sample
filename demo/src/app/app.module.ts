import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EcommComponent } from './ecomm/ecomm.component';
import { CartComponent } from './ecomm/cart/cart.component';
import { EcommproductComponent } from './ecomm/ecommproduct/ecommproduct.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserviewComponent } from './users/userview/userview.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomeremailComponent } from './customeremail/customeremail.component';
import { CustomernameComponent } from './customername/customername.component';
import { GetapiComponent } from './getapi/getapi.component';
import { HttpClientModule } from '@angular/common/http';
import { PostapiComponent } from './postapi/postapi.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server', component: ServerComponent },
  { path: 'products', component: ProductComponent },
  { path: 'ecomm', component: EcommComponent },
  { path: 'tforms', component: TformsComponent },
  { path: 'rforms', component: RformsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserviewComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'customeremail', component: CustomeremailComponent },
  { path: 'customername', component: CustomernameComponent },
  { path: 'getapi', component: GetapiComponent },
  { path: 'postapi', component: PostapiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
    EcommComponent,
    CartComponent,
    EcommproductComponent,
    HomeComponent,
    TformsComponent,
    RformsComponent,
    UsersComponent,
    UserComponent,
    UserviewComponent,
    ChildComponent,
    ParentComponent,
    PipesComponent,
    CustomeremailComponent,
    CustomernameComponent,
    GetapiComponent,
    PostapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
