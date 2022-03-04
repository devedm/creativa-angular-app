import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DefaultComponent } from './default.component';

import { MatSidenavModule } from '@angular/material/sidenav';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})

export class DefaultModule { }
