import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su2U3PageRoutingModule } from './t2-su2-u3-routing.module';

import { T2Su2U3Page } from './t2-su2-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su2U3PageRoutingModule
  ],
  declarations: [T2Su2U3Page]
})
export class T2Su2U3PageModule {}
