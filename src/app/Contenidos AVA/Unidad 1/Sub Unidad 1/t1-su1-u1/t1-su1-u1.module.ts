import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su1U1PageRoutingModule } from './t1-su1-u1-routing.module';

import { T1Su1U1Page } from './t1-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su1U1PageRoutingModule
  ],
  declarations: [T1Su1U1Page]
})
export class T1Su1U1PageModule {}
