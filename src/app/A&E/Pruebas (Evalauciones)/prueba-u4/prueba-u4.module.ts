import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU4PageRoutingModule } from './prueba-u4-routing.module';

import { PruebaU4Page } from './prueba-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU4PageRoutingModule
  ],
  declarations: [PruebaU4Page]
})
export class PruebaU4PageModule {}
