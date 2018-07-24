import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { AuthGuard } from './core/auth.guard';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NoAuthComponent }
];

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
