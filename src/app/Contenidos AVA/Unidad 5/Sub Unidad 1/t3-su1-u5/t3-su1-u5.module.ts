import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T3Su1U5PageRoutingModule } from './t3-su1-u5-routing.module';

import { T3Su1U5Page } from './t3-su1-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T3Su1U5PageRoutingModule
  ],
  declarations: [T3Su1U5Page]
})
export class T3Su1U5PageModule {}
