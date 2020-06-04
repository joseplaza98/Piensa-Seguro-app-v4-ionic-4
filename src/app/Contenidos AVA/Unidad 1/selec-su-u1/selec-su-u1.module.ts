import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU1PageRoutingModule } from './selec-su-u1-routing.module';

import { SelecSuU1Page } from './selec-su-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU1PageRoutingModule
  ],
  declarations: [SelecSuU1Page]
})
export class SelecSuU1PageModule {}
