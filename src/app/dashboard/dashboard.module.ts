import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../angular-material';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, CoursesComponent],
  imports: [
    CommonModule, RouterModule.forChild(dashboardRoutes),
    MaterialModule
  ]
})
export class DashboardModule { }
