import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Ensure this path is correct
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ensure AppRoutingModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
