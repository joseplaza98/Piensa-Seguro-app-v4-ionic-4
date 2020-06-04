import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU2Page } from './selec-su-u2.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU2PageRoutingModule {}
