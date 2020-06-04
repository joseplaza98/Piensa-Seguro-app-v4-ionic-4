import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su1U1PageRoutingModule } from './a2-su1-u1-routing.module';

import { A2Su1U1Page } from './a2-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su1U1PageRoutingModule
  ],
  declarations: [A2Su1U1Page]
})
export class A2Su1U1PageModule {}
