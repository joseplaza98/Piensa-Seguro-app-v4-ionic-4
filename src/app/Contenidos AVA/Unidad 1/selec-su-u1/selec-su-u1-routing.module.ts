import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU1Page } from './selec-su-u1.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU1PageRoutingModule {}
