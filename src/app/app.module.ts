import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateformatDirective } from './shared/Directives/dateformat.directive';
import { PhoneNumberDirective } from './shared/Directives/phone-number.directive';
import { EmailDirectiveDirective } from './shared/Directives/email-directive.directive';
import { SampleComponent } from './sample.component';
import { ServiceAService } from './shared/services/service-a.service';
import { ServiceBService } from './shared/services/service-b.service';
import { LoginComponent } from './shared/components/login/login.component';
import { PasswordDirective } from './shared/Directives/password.directive';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    DateformatDirective,
    PhoneNumberDirective,
    EmailDirectiveDirective,
    SampleComponent,
    LoginComponent,
    PasswordDirective,
    ProductsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
