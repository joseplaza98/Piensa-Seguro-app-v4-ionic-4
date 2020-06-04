import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A3Su2U3PageRoutingModule } from './a3-su2-u3-routing.module';

import { A3Su2U3Page } from './a3-su2-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A3Su2U3PageRoutingModule
  ],
  declarations: [A3Su2U3Page]
})
export class A3Su2U3PageModule {}
