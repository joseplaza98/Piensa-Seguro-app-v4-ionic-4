import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su1U1PageRoutingModule } from './t3-su1-u1-routing.module';

import { T3Su1U1Page } from './t3-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su1U1PageRoutingModule
  ],
  declarations: [T3Su1U1Page]
})
export class T3Su1U1PageModule {}
