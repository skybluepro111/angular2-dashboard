import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginbtnComponent } from './loginbtn/Loginbtn.Component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  //  {
  //     path: 'login',
  //     component: LoginbtnComponent,
  //   }, 
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
  },
 
  
    children: [
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      },
      {
        path: 'health',
        loadChildren: './health/health.module#HealthModule'
      },
      {
        path: 'tb-screening',
        loadChildren: './tb-screening/tb-screening.module#TbScreeningModule'
      },
      {
        path: 'login-out',
        loadChildren: './login-out/login-out.module#LoginOutModule'
      },
           
    ],
    
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
