import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su2U4PageRoutingModule } from './t1-su2-u4-routing.module';

import { T1Su2U4Page } from './t1-su2-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su2U4PageRoutingModule
  ],
  declarations: [T1Su2U4Page]
})
export class T1Su2U4PageModule {}
