import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su2U3PageRoutingModule } from './a2-su2-u3-routing.module';

import { A2Su2U3Page } from './a2-su2-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su2U3PageRoutingModule
  ],
  declarations: [A2Su2U3Page]
})
export class A2Su2U3PageModule {}
