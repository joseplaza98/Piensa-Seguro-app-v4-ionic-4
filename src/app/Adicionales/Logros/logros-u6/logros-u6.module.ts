import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU6PageRoutingModule } from './logros-u6-routing.module';

import { LogrosU6Page } from './logros-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU6PageRoutingModule
  ],
  declarations: [LogrosU6Page]
})
export class LogrosU6PageModule {}
