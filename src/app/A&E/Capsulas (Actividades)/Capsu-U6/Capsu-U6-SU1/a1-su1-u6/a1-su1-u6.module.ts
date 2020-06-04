import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su1U6PageRoutingModule } from './a1-su1-u6-routing.module';

import { A1Su1U6Page } from './a1-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su1U6PageRoutingModule
  ],
  declarations: [A1Su1U6Page]
})
export class A1Su1U6PageModule {}
