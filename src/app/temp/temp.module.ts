import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempComponent } from './temp.component';
import { tempRouting } from './temp.routing';

@NgModule({
  imports: [
    CommonModule,
    tempRouting
  ],
  declarations: [ TempComponent ],
  providers: []
})
export class TempModule { }
