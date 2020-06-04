import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU5PageRoutingModule } from './prueba-u5-routing.module';

import { PruebaU5Page } from './prueba-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU5PageRoutingModule
  ],
  declarations: [PruebaU5Page]
})
export class PruebaU5PageModule {}
