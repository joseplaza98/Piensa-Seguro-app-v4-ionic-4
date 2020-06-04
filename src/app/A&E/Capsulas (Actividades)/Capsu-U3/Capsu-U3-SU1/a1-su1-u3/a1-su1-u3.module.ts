import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su1U3PageRoutingModule } from './a1-su1-u3-routing.module';

import { A1Su1U3Page } from './a1-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su1U3PageRoutingModule
  ],
  declarations: [A1Su1U3Page]
})
export class A1Su1U3PageModule {}
