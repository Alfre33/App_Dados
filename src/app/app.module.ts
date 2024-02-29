import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJagfComponent } from './components/navbar-jagf/navbar-jagf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJagfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
