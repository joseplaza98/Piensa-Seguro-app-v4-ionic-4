import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su1U1PageRoutingModule } from './a1-su1-u1-routing.module';

import { A1Su1U1Page } from './a1-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su1U1PageRoutingModule
  ],
  declarations: [A1Su1U1Page]
})
export class A1Su1U1PageModule {}
