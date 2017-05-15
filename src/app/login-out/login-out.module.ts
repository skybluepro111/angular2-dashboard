import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LoginOutComponent } from './login-out.component';
import { LoginOutRoutingModule } from './login-out-routing.module';

@NgModule({
  imports: [
    LoginOutRoutingModule,
    ChartsModule
  ],
  declarations: [ LoginOutComponent ]
})
export class LoginOutModule { }
