import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T4Su1U1PageRoutingModule } from './t4-su1-u1-routing.module';

import { T4Su1U1Page } from './t4-su1-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T4Su1U1PageRoutingModule
  ],
  declarations: [T4Su1U1Page]
})
export class T4Su1U1PageModule {}
