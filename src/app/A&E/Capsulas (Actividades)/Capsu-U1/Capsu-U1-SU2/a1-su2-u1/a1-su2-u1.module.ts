import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su2U1PageRoutingModule } from './a1-su2-u1-routing.module';

import { A1Su2U1Page } from './a1-su2-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su2U1PageRoutingModule
  ],
  declarations: [A1Su2U1Page]
})
export class A1Su2U1PageModule {}
