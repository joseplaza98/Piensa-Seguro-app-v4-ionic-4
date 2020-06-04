import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su1U7PageRoutingModule } from './t1-su1-u7-routing.module';

import { T1Su1U7Page } from './t1-su1-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su1U7PageRoutingModule
  ],
  declarations: [T1Su1U7Page]
})
export class T1Su1U7PageModule {}
