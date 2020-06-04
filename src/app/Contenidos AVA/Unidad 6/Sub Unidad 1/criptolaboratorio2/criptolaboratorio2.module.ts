import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Criptolaboratorio2PageRoutingModule } from './criptolaboratorio2-routing.module';

import { Criptolaboratorio2Page } from './criptolaboratorio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Criptolaboratorio2PageRoutingModule
  ],
  declarations: [Criptolaboratorio2Page]
})
export class Criptolaboratorio2PageModule {}
