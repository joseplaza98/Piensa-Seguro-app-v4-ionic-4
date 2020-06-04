import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su1U3PageRoutingModule } from './t1-su1-u3-routing.module';

import { T1Su1U3Page } from './t1-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su1U3PageRoutingModule
  ],
  declarations: [T1Su1U3Page]
})
export class T1Su1U3PageModule {}
