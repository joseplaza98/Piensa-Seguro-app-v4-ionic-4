import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A4Su1U2PageRoutingModule } from './a4-su1-u2-routing.module';

import { A4Su1U2Page } from './a4-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A4Su1U2PageRoutingModule
  ],
  declarations: [A4Su1U2Page]
})
export class A4Su1U2PageModule {}
