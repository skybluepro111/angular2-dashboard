import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOutComponent } from './login-out.component';

const routes: Routes = [
  {
    path: '',
    component: LoginOutComponent,
    data: {
      title: 'Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginOutRoutingModule {}
