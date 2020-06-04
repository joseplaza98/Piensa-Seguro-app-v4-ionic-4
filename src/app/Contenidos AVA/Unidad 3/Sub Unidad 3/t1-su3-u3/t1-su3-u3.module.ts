import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T1Su3U3PageRoutingModule } from './t1-su3-u3-routing.module';

import { T1Su3U3Page } from './t1-su3-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T1Su3U3PageRoutingModule
  ],
  declarations: [T1Su3U3Page]
})
export class T1Su3U3PageModule {}
