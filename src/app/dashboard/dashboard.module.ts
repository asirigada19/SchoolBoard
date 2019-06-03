import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../angular-material';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { GradesComponent } from './grades/grades.component';
import { AnnouncementsComponent } from './home/announcements/announcements.component';
import { LibraryComponent } from './home/library/library.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [DashboardComponent, HomeComponent, CoursesComponent, GradesComponent, AnnouncementsComponent, LibraryComponent],
  imports: [
    CommonModule, RouterModule.forChild(dashboardRoutes),
    MaterialModule, FlexLayoutModule
  ]
})
export class DashboardModule { }
