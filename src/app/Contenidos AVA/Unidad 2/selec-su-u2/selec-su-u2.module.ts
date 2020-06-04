import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU2PageRoutingModule } from './selec-su-u2-routing.module';

import { SelecSuU2Page } from './selec-su-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU2PageRoutingModule
  ],
  declarations: [SelecSuU2Page]
})
export class SelecSuU2PageModule {}
