import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su2U2PageRoutingModule } from './t2-su2-u2-routing.module';

import { T2Su2U2Page } from './t2-su2-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su2U2PageRoutingModule
  ],
  declarations: [T2Su2U2Page]
})
export class T2Su2U2PageModule {}
