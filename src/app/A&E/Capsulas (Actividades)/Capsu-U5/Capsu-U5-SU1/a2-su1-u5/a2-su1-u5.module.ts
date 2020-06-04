import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su1U5PageRoutingModule } from './a2-su1-u5-routing.module';

import { A2Su1U5Page } from './a2-su1-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su1U5PageRoutingModule
  ],
  declarations: [A2Su1U5Page]
})
export class A2Su1U5PageModule {}
