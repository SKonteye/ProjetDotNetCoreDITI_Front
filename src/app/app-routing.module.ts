import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import the Routes type

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Add this route to redirect to the login page
  { path: '', 
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'article', component: ArticleComponent}
    ]},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
