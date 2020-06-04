import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su1U6PageRoutingModule } from './t1-su1-u6-routing.module';

import { T1Su1U6Page } from './t1-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su1U6PageRoutingModule
  ],
  declarations: [T1Su1U6Page]
})
export class T1Su1U6PageModule {}
