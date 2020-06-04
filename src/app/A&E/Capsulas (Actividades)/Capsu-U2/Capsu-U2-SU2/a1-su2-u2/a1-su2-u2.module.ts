import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su2U2PageRoutingModule } from './a1-su2-u2-routing.module';

import { A1Su2U2Page } from './a1-su2-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su2U2PageRoutingModule
  ],
  declarations: [A1Su2U2Page]
})
export class A1Su2U2PageModule {}
