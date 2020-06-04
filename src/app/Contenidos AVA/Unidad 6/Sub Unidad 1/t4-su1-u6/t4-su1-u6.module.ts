import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T4Su1U6PageRoutingModule } from './t4-su1-u6-routing.module';

import { T4Su1U6Page } from './t4-su1-u6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T4Su1U6PageRoutingModule
  ],
  declarations: [T4Su1U6Page]
})
export class T4Su1U6PageModule {}
