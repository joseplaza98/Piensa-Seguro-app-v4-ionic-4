import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su3U2PageRoutingModule } from './t1-su3-u2-routing.module';

import { T1Su3U2Page } from './t1-su3-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su3U2PageRoutingModule
  ],
  declarations: [T1Su3U2Page]
})
export class T1Su3U2PageModule {}
