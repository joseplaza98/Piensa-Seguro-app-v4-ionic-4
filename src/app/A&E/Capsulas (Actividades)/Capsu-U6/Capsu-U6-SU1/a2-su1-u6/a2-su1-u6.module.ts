import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su1U6PageRoutingModule } from './a2-su1-u6-routing.module';

import { A2Su1U6Page } from './a2-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su1U6PageRoutingModule
  ],
  declarations: [A2Su1U6Page]
})
export class A2Su1U6PageModule {}
