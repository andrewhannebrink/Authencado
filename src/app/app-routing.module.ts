import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoAuthComponent } from './no-auth/no-auth.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: NoAuthComponent }
];

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
