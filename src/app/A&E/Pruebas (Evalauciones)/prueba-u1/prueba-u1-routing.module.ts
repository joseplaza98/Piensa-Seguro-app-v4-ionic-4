import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU1Page } from './prueba-u1.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU1PageRoutingModule {}
