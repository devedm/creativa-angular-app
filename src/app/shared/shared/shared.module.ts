import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
