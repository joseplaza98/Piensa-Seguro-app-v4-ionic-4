import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaU3PageRoutingModule } from './prueba-u3-routing.module';

import { PruebaU3Page } from './prueba-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaU3PageRoutingModule
  ],
  declarations: [PruebaU3Page]
})
export class PruebaU3PageModule {}
