import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A1Su3U3PageRoutingModule } from './a1-su3-u3-routing.module';

import { A1Su3U3Page } from './a1-su3-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A1Su3U3PageRoutingModule
  ],
  declarations: [A1Su3U3Page]
})
export class A1Su3U3PageModule {}
