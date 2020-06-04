import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T5Su1U3PageRoutingModule } from './t5-su1-u3-routing.module';

import { T5Su1U3Page } from './t5-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T5Su1U3PageRoutingModule
  ],
  declarations: [T5Su1U3Page]
})
export class T5Su1U3PageModule {}
