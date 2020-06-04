import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU7PageRoutingModule } from './logros-u7-routing.module';

import { LogrosU7Page } from './logros-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU7PageRoutingModule
  ],
  declarations: [LogrosU7Page]
})
export class LogrosU7PageModule {}
