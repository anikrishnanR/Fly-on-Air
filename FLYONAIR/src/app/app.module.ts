import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';


import { FormsModule,ReactiveFormsModule,FormControl } from '@angular/forms';
import { CustomMaterialModule } from './meterial/meterials';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchingComponent } from './searching/searching.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { FtbookingComponent } from './ftbooking/ftbooking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SearchingComponent,
    FdetailsComponent,
    FtbookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
     [ {
        path:'login', component:LoginComponent
      },
      {
        path:'register', component:RegisterComponent
      },
      {path:'searching', component:SearchingComponent},
      {
        path:'ftbooking', component:FtbookingComponent
      },
    {path:'', component:LoginComponent}]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
