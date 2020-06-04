import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su2U4PageRoutingModule } from './a2-su2-u4-routing.module';

import { A2Su2U4Page } from './a2-su2-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su2U4PageRoutingModule
  ],
  declarations: [A2Su2U4Page]
})
export class A2Su2U4PageModule {}
