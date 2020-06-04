import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU7Page } from './prueba-u7.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU7PageRoutingModule {}
