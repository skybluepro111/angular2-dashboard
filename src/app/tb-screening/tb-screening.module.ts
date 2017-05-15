import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TbScreeningComponent } from './tb-screening.component';
import { TbScreeningRoutingModule } from './tb-screening-routing.module';

@NgModule({
  imports: [
    TbScreeningRoutingModule,
    ChartsModule
  ],
  declarations: [ TbScreeningComponent ]
})
export class TbScreeningModule { }
