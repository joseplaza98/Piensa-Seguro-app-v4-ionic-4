import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su1U7PageRoutingModule } from './a1-su1-u7-routing.module';

import { A1Su1U7Page } from './a1-su1-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su1U7PageRoutingModule
  ],
  declarations: [A1Su1U7Page]
})
export class A1Su1U7PageModule {}
