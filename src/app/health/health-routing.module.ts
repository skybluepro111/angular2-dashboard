import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthComponent } from './health.component';

const routes: Routes = [
  {
    path: '',
    component: HealthComponent,
    data: {
      title: 'Search Patient'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule {}