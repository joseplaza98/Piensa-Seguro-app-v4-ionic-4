import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU2PageRoutingModule } from './logros-u2-routing.module';

import { LogrosU2Page } from './logros-u2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU2PageRoutingModule
  ],
  declarations: [LogrosU2Page]
})
export class LogrosU2PageModule {}
