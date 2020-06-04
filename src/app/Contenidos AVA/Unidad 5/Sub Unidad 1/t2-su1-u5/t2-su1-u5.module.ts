import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su1U5PageRoutingModule } from './t2-su1-u5-routing.module';

import { T2Su1U5Page } from './t2-su1-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su1U5PageRoutingModule
  ],
  declarations: [T2Su1U5Page]
})
export class T2Su1U5PageModule {}
