import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    RegisterRoutingModule,
    ChartsModule
  ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule { }
