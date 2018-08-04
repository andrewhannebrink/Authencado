import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { AuthGuard } from './core/auth.guard';


export const ROUTES: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './no-auth/no-auth.module#NoAuthModule'},
  { path: '**', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
