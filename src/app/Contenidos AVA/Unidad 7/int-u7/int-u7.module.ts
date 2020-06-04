import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU7PageRoutingModule } from './int-u7-routing.module';

import { IntU7Page } from './int-u7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU7PageRoutingModule
  ],
  declarations: [IntU7Page]
})
export class IntU7PageModule {}
