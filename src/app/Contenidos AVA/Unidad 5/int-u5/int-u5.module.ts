import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntU5PageRoutingModule } from './int-u5-routing.module';

import { IntU5Page } from './int-u5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntU5PageRoutingModule
  ],
  declarations: [IntU5Page]
})
export class IntU5PageModule {}
