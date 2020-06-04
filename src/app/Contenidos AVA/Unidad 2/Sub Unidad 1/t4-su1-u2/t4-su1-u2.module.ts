import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T4Su1U2PageRoutingModule } from './t4-su1-u2-routing.module';

import { T4Su1U2Page } from './t4-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T4Su1U2PageRoutingModule
  ],
  declarations: [T4Su1U2Page]
})
export class T4Su1U2PageModule {}
