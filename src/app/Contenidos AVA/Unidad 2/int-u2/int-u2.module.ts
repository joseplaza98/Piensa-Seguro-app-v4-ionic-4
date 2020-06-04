import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU2PageRoutingModule } from './int-u2-routing.module';

import { IntU2Page } from './int-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU2PageRoutingModule
  ],
  declarations: [IntU2Page]
})
export class IntU2PageModule {}
