import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { GradesComponent } from './grades/grades.component';
import { AuthGuard } from '../_guards/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
      { path: 'grades', component: GradesComponent, canActivate: [AuthGuard]}
    ]
  }
];