import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU1PageRoutingModule } from './logros-u1-routing.module';

import { LogrosU1Page } from './logros-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU1PageRoutingModule
  ],
  declarations: [LogrosU1Page]
})
export class LogrosU1PageModule {}
