import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su2U5PageRoutingModule } from './t1-su2-u5-routing.module';

import { T1Su2U5Page } from './t1-su2-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su2U5PageRoutingModule
  ],
  declarations: [T1Su2U5Page]
})
export class T1Su2U5PageModule {}
