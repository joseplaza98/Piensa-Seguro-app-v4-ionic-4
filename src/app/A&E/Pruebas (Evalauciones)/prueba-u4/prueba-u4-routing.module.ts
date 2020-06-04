import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU4Page } from './prueba-u4.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU4PageRoutingModule {}
