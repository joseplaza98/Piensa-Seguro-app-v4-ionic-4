import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su2U3PageRoutingModule } from './t3-su2-u3-routing.module';

import { T3Su2U3Page } from './t3-su2-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su2U3PageRoutingModule
  ],
  declarations: [T3Su2U3Page]
})
export class T3Su2U3PageModule {}
