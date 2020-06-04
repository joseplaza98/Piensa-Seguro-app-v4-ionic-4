import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU2Page } from './prueba-u2.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU2PageRoutingModule {}
