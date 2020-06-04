import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su2U4PageRoutingModule } from './t2-su2-u4-routing.module';

import { T2Su2U4Page } from './t2-su2-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su2U4PageRoutingModule
  ],
  declarations: [T2Su2U4Page]
})
export class T2Su2U4PageModule {}
