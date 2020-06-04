import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su1U4PageRoutingModule } from './a1-su1-u4-routing.module';

import { A1Su1U4Page } from './a1-su1-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su1U4PageRoutingModule
  ],
  declarations: [A1Su1U4Page]
})
export class A1Su1U4PageModule {}
