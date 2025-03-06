import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
  // Login at root
  { path: '', component: LoginComponent, pathMatch: 'full' },

  // Layout for other pages under "/app"
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'employees', component: EmployeeListComponent },
      { path: '', redirectTo: 'employees', pathMatch: 'full' }
    ]
  },

  // Wildcard route
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
