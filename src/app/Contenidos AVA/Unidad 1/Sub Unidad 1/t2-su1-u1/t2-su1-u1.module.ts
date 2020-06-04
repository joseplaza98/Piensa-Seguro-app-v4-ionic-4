import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su1U1PageRoutingModule } from './t2-su1-u1-routing.module';

import { T2Su1U1Page } from './t2-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su1U1PageRoutingModule
  ],
  declarations: [T2Su1U1Page]
})
export class T2Su1U1PageModule {}
