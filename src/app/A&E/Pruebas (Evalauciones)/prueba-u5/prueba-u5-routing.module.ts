import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU5Page } from './prueba-u5.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU5PageRoutingModule {}
