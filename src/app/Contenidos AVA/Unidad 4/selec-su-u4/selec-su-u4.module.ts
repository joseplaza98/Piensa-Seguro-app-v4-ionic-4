import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU4PageRoutingModule } from './selec-su-u4-routing.module';

import { SelecSuU4Page } from './selec-su-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU4PageRoutingModule
  ],
  declarations: [SelecSuU4Page]
})
export class SelecSuU4PageModule {}
