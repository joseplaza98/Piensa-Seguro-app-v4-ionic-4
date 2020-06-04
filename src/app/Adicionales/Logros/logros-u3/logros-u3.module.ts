import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosU3PageRoutingModule } from './logros-u3-routing.module';

import { LogrosU3Page } from './logros-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosU3PageRoutingModule
  ],
  declarations: [LogrosU3Page]
})
export class LogrosU3PageModule {}
