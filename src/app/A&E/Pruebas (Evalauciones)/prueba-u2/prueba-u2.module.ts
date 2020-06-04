import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU2PageRoutingModule } from './prueba-u2-routing.module';

import { PruebaU2Page } from './prueba-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU2PageRoutingModule
  ],
  declarations: [PruebaU2Page]
})
export class PruebaU2PageModule {}
