import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T4Su1U3PageRoutingModule } from './t4-su1-u3-routing.module';

import { T4Su1U3Page } from './t4-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T4Su1U3PageRoutingModule
  ],
  declarations: [T4Su1U3Page]
})
export class T4Su1U3PageModule {}
