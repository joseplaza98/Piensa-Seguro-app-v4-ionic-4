import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU6PageRoutingModule } from './selec-su-u6-routing.module';

import { SelecSuU6Page } from './selec-su-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU6PageRoutingModule
  ],
  declarations: [SelecSuU6Page]
})
export class SelecSuU6PageModule {}
