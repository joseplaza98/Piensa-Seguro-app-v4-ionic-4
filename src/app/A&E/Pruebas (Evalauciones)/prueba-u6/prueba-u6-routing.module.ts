import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU6Page } from './prueba-u6.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU6PageRoutingModule {}
