import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T6Su1U3PageRoutingModule } from './t6-su1-u3-routing.module';

import { T6Su1U3Page } from './t6-su1-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T6Su1U3PageRoutingModule
  ],
  declarations: [T6Su1U3Page]
})
export class T6Su1U3PageModule {}
