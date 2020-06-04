import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A2Su1U7PageRoutingModule } from './a2-su1-u7-routing.module';

import { A2Su1U7Page } from './a2-su1-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A2Su1U7PageRoutingModule
  ],
  declarations: [A2Su1U7Page]
})
export class A2Su1U7PageModule {}
