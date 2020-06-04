import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su1U6PageRoutingModule } from './t2-su1-u6-routing.module';

import { T2Su1U6Page } from './t2-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su1U6PageRoutingModule
  ],
  declarations: [T2Su1U6Page]
})
export class T2Su1U6PageModule {}
