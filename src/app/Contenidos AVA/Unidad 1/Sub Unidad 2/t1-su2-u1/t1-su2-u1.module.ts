import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su2U1PageRoutingModule } from './t1-su2-u1-routing.module';

import { T1Su2U1Page } from './t1-su2-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su2U1PageRoutingModule
  ],
  declarations: [T1Su2U1Page]
})
export class T1Su2U1PageModule {}
