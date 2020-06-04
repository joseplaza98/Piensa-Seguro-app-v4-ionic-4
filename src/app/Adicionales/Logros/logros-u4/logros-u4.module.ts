import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU4PageRoutingModule } from './logros-u4-routing.module';

import { LogrosU4Page } from './logros-u4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU4PageRoutingModule
  ],
  declarations: [LogrosU4Page]
})
export class LogrosU4PageModule {}
