import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T5Su1U2PageRoutingModule } from './t5-su1-u2-routing.module';

import { T5Su1U2Page } from './t5-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T5Su1U2PageRoutingModule
  ],
  declarations: [T5Su1U2Page]
})
export class T5Su1U2PageModule {}
