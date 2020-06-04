import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su1U6PageRoutingModule } from './t3-su1-u6-routing.module';

import { T3Su1U6Page } from './t3-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su1U6PageRoutingModule
  ],
  declarations: [T3Su1U6Page]
})
export class T3Su1U6PageModule {}
