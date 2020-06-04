import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanCapacitacionPageRoutingModule } from './plan-capacitacion-routing.module';

import { PlanCapacitacionPage } from './plan-capacitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanCapacitacionPageRoutingModule
  ],
  declarations: [PlanCapacitacionPage]
})
export class PlanCapacitacionPageModule {}
