import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su3U2PageRoutingModule } from './a1-su3-u2-routing.module';

import { A1Su3U2Page } from './a1-su3-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su3U2PageRoutingModule
  ],
  declarations: [A1Su3U2Page]
})
export class A1Su3U2PageModule {}
