import { NgModule } from '@angular/core';

import { HeaderComponent } from './shared/header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



@NgModule({
  declarations: [AppComponent,HeaderComponent,SidebarComponent],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule,
    RouterModule,
    SharedModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
