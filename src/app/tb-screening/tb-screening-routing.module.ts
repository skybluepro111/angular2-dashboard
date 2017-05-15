import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbScreeningComponent } from './tb-screening.component';

const routes: Routes = [
  {
    path: '',
    component: TbScreeningComponent,
    data: {
      title: 'Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TbScreeningRoutingModule {}
