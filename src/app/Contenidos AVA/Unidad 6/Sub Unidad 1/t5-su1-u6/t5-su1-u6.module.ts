import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T5Su1U6PageRoutingModule } from './t5-su1-u6-routing.module';

import { T5Su1U6Page } from './t5-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T5Su1U6PageRoutingModule
  ],
  declarations: [T5Su1U6Page]
})
export class T5Su1U6PageModule {}
