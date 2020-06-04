import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU5PageRoutingModule } from './selec-su-u5-routing.module';

import { SelecSuU5Page } from './selec-su-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU5PageRoutingModule
  ],
  declarations: [SelecSuU5Page]
})
export class SelecSuU5PageModule {}
