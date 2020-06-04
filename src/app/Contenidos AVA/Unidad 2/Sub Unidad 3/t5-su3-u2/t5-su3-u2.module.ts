import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T5Su3U2PageRoutingModule } from './t5-su3-u2-routing.module';

import { T5Su3U2Page } from './t5-su3-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T5Su3U2PageRoutingModule
  ],
  declarations: [T5Su3U2Page]
})
export class T5Su3U2PageModule {}
