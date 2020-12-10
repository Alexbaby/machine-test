import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectiononeComponent } from './sectionone/sectionone.component';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    SectiononeComponent,
    LoginbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
