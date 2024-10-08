import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes =[
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
