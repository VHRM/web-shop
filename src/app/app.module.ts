import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFacade } from './app.facade';
import { UserState } from './state/user.state';
import { PaymentState } from './state/payment.state';
import { ProductState } from './state/product.state';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FilterComponent } from './components/filter/filter.component';
import { MoneyPipe } from './money.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    LoginComponent,
    ListItemComponent,
    AuthHeaderComponent,
    PaymentCardComponent,
    FilterComponent,
    MoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    AppFacade,
    UserState,
    PaymentState,
    ProductState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
