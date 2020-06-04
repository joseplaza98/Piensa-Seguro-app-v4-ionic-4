import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su1U4PageRoutingModule } from './t1-su1-u4-routing.module';

import { T1Su1U4Page } from './t1-su1-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su1U4PageRoutingModule
  ],
  declarations: [T1Su1U4Page]
})
export class T1Su1U4PageModule {}
