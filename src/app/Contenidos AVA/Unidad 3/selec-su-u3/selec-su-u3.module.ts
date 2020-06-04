import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecSuU3PageRoutingModule } from './selec-su-u3-routing.module';

import { SelecSuU3Page } from './selec-su-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecSuU3PageRoutingModule
  ],
  declarations: [SelecSuU3Page]
})
export class SelecSuU3PageModule {}
