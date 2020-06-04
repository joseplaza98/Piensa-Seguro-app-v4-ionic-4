import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su1U3PageRoutingModule } from './t3-su1-u3-routing.module';

import { T3Su1U3Page } from './t3-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su1U3PageRoutingModule
  ],
  declarations: [T3Su1U3Page]
})
export class T3Su1U3PageModule {}
