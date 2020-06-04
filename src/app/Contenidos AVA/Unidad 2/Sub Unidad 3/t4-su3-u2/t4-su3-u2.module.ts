import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T4Su3U2PageRoutingModule } from './t4-su3-u2-routing.module';

import { T4Su3U2Page } from './t4-su3-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T4Su3U2PageRoutingModule
  ],
  declarations: [T4Su3U2Page]
})
export class T4Su3U2PageModule {}
