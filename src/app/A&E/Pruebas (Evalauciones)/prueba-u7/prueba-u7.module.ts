import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU7PageRoutingModule } from './prueba-u7-routing.module';

import { PruebaU7Page } from './prueba-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU7PageRoutingModule
  ],
  declarations: [PruebaU7Page]
})
export class PruebaU7PageModule {}
