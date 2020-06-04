import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU7PageRoutingModule } from './selec-su-u7-routing.module';

import { SelecSuU7Page } from './selec-su-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU7PageRoutingModule
  ],
  declarations: [SelecSuU7Page]
})
export class SelecSuU7PageModule {}
