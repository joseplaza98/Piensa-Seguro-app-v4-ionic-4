import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU4PageRoutingModule } from './int-u4-routing.module';

import { IntU4Page } from './int-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU4PageRoutingModule
  ],
  declarations: [IntU4Page]
})
export class IntU4PageModule {}
