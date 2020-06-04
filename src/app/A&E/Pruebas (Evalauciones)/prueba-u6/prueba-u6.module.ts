import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU6PageRoutingModule } from './prueba-u6-routing.module';

import { PruebaU6Page } from './prueba-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU6PageRoutingModule
  ],
  declarations: [PruebaU6Page]
})
export class PruebaU6PageModule {}
