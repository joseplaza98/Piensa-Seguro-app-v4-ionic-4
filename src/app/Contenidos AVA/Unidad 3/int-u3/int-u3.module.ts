import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU3PageRoutingModule } from './int-u3-routing.module';

import { IntU3Page } from './int-u3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU3PageRoutingModule
  ],
  declarations: [IntU3Page]
})
export class IntU3PageModule {}
