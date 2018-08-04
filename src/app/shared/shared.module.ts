import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule 
  ],
  declarations: [
    ExploreComponent,
    FooterComponent
  ],
  exports: [
    AngularFontAwesomeModule,
    CommonModule,
    ExploreComponent,
    FlexLayoutModule,
    FooterComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule 
  ]
})
export class SharedModule { }
