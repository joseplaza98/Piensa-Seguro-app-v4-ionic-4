import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su1U7PageRoutingModule } from './t2-su1-u7-routing.module';

import { T2Su1U7Page } from './t2-su1-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su1U7PageRoutingModule
  ],
  declarations: [T2Su1U7Page]
})
export class T2Su1U7PageModule {}
