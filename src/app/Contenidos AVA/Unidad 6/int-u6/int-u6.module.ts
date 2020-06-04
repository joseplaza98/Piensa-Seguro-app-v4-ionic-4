import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU6PageRoutingModule } from './int-u6-routing.module';

import { IntU6Page } from './int-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU6PageRoutingModule
  ],
  declarations: [IntU6Page]
})
export class IntU6PageModule {}
