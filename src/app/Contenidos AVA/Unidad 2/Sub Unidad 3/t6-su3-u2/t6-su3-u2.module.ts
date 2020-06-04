import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T6Su3U2PageRoutingModule } from './t6-su3-u2-routing.module';

import { T6Su3U2Page } from './t6-su3-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T6Su3U2PageRoutingModule
  ],
  declarations: [T6Su3U2Page]
})
export class T6Su3U2PageModule {}
