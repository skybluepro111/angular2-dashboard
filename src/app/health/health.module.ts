import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HealthComponent } from './health.component';
import { HealthRoutingModule } from './health-routing.module';

@NgModule({
  imports: [
    HealthRoutingModule,
    ChartsModule
  ],
  declarations: [ HealthComponent ]
})
export class HealthModule { }
