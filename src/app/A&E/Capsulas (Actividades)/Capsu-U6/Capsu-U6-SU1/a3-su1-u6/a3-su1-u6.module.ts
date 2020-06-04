import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A3Su1U6PageRoutingModule } from './a3-su1-u6-routing.module';

import { A3Su1U6Page } from './a3-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A3Su1U6PageRoutingModule
  ],
  declarations: [A3Su1U6Page]
})
export class A3Su1U6PageModule {}
