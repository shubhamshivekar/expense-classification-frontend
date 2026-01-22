import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { AdminUsers } from './pages/admin-users/admin-users';
import { Categories } from './pages/categories/categories';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'categories', component: Categories, canActivate: [authGuard] },
  { path: 'admin-users', component: AdminUsers, canActivate: [authGuard] },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
