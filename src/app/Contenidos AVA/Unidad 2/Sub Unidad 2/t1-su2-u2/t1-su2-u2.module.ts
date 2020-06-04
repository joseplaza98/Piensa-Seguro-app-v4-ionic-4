import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su2U2PageRoutingModule } from './t1-su2-u2-routing.module';

import { T1Su2U2Page } from './t1-su2-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su2U2PageRoutingModule
  ],
  declarations: [T1Su2U2Page]
})
export class T1Su2U2PageModule {}
