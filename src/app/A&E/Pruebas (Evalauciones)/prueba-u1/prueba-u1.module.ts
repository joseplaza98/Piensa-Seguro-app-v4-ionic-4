import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU1PageRoutingModule } from './prueba-u1-routing.module';

import { PruebaU1Page } from './prueba-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU1PageRoutingModule
  ],
  declarations: [PruebaU1Page]
})
export class PruebaU1PageModule {}
