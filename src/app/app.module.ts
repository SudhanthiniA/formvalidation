import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AddformComponent } from './addform/addform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListformComponent } from './listform/listform.component';

@NgModule({
  declarations: [
    AppComponent,
    // routingComponents
    // AddformComponent,
    ListformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // routingComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
