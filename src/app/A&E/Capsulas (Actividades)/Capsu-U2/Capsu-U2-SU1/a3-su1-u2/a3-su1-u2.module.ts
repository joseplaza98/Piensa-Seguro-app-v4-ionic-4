import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A3Su1U2PageRoutingModule } from './a3-su1-u2-routing.module';

import { A3Su1U2Page } from './a3-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A3Su1U2PageRoutingModule
  ],
  declarations: [A3Su1U2Page]
})
export class A3Su1U2PageModule {}
