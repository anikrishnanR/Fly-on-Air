import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';


import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CustomMaterialModule } from './meterial/meterials';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchingComponent } from './searching/searching.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { FtbookingComponent } from './ftbooking/ftbooking.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SearchingComponent,
    FdetailsComponent,
    FtbookingComponent,
    BookDetailsComponent,
    AboutComponent,
    HelpComponent,
    HomeComponent,
    InstructionComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
     [ {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {path: 'searching', component: SearchingComponent},
      {
        path: 'ftbooking', component: FtbookingComponent
      },
      {
        path: 'book-details', component: BookDetailsComponent,
        children: [
          {path: 'app-review/:id', component:ReviewComponent},]},
      {
        path: 'app-about', component: AboutComponent
      },
      {
        path: 'app-help', component: HelpComponent
      },
      {
        path: 'app-home', component: HomeComponent
      },

      {
        path: 'app-instruction', component: InstructionComponent
      },


    {path: '', component: SearchingComponent}]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
