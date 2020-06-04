import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su1U2PageRoutingModule } from './t3-su1-u2-routing.module';

import { T3Su1U2Page } from './t3-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su1U2PageRoutingModule
  ],
  declarations: [T3Su1U2Page]
})
export class T3Su1U2PageModule {}
