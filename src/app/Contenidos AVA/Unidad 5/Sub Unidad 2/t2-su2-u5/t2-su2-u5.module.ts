import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su2U5PageRoutingModule } from './t2-su2-u5-routing.module';

import { T2Su2U5Page } from './t2-su2-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su2U5PageRoutingModule
  ],
  declarations: [T2Su2U5Page]
})
export class T2Su2U5PageModule {}
