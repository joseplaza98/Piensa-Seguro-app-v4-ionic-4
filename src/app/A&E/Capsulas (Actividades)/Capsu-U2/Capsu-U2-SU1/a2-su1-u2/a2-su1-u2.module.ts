import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su1U2PageRoutingModule } from './a2-su1-u2-routing.module';

import { A2Su1U2Page } from './a2-su1-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su1U2PageRoutingModule
  ],
  declarations: [A2Su1U2Page]
})
export class A2Su1U2PageModule {}
