import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutCompComponent } from './logout-comp/logout-comp.component';
import { LoginCompComponent} from './login-comp/login-comp.component'
import {MyserviceService} from './myservice.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
//import { LoadfileComponent } from './loadfile/loadfile.component';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DisplaydetailsDirective } from './displaydetails.directive'


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'logout', component: LogoutCompComponent },
  { path: 'login', component: LoginCompComponent },
  { path: 'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'news', component:NewsComponent},
  {path: 'details', component:DisplaydetailsComponent},
  {path: "signup", component:SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
   LogoutCompComponent,
  LoginCompComponent,
  HomeComponent,
  ContactComponent,
  AboutComponent,
  NewsComponent,
  HeaderComponent,
  DisplaydetailsComponent,
  FooterComponent,
  SignupComponent,
  CardComponent
   ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
    RouterModule.forRoot( appRoutes),
    HttpClientModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
