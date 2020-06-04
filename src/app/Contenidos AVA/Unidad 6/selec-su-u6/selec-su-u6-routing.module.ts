import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU6Page } from './selec-su-u6.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU6PageRoutingModule {}
