import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su2U5PageRoutingModule } from './a1-su2-u5-routing.module';

import { A1Su2U5Page } from './a1-su2-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su2U5PageRoutingModule
  ],
  declarations: [A1Su2U5Page]
})
export class A1Su2U5PageModule {}
