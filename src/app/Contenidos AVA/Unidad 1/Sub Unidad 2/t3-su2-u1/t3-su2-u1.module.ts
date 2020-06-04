import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su2U1PageRoutingModule } from './t3-su2-u1-routing.module';

import { T3Su2U1Page } from './t3-su2-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su2U1PageRoutingModule
  ],
  declarations: [T3Su2U1Page]
})
export class T3Su2U1PageModule {}
