import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Criptolaboratorio1PageRoutingModule } from './criptolaboratorio1-routing.module';

import { Criptolaboratorio1Page } from './criptolaboratorio1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Criptolaboratorio1PageRoutingModule
  ],
  declarations: [Criptolaboratorio1Page]
})
export class Criptolaboratorio1PageModule {}
