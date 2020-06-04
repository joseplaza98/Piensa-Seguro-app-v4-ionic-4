import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaU3Page } from './prueba-u3.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaU3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaU3PageRoutingModule {}
