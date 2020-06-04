import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU5PageRoutingModule } from './logros-u5-routing.module';

import { LogrosU5Page } from './logros-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU5PageRoutingModule
  ],
  declarations: [LogrosU5Page]
})
export class LogrosU5PageModule {}
