import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A3Su1U1PageRoutingModule } from './a3-su1-u1-routing.module';

import { A3Su1U1Page } from './a3-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A3Su1U1PageRoutingModule
  ],
  declarations: [A3Su1U1Page]
})
export class A3Su1U1PageModule {}
