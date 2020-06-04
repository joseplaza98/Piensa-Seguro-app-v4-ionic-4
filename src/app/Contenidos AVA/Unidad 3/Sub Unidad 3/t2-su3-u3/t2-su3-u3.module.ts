import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2Su3U3PageRoutingModule } from './t2-su3-u3-routing.module';

import { T2Su3U3Page } from './t2-su3-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2Su3U3PageRoutingModule
  ],
  declarations: [T2Su3U3Page]
})
export class T2Su3U3PageModule {}
