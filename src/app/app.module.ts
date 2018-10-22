import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashboardDataService} from "./dashboard-data.service"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DashboardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
