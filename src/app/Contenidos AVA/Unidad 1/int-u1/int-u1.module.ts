import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU1PageRoutingModule } from './int-u1-routing.module';

import { IntU1Page } from './int-u1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU1PageRoutingModule
  ],
  declarations: [IntU1Page]
})
export class IntU1PageModule {}
