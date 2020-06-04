import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU4Page } from './selec-su-u4.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU4PageRoutingModule {}
