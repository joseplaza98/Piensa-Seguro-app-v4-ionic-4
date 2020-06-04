import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU7Page } from './selec-su-u7.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU7PageRoutingModule {}
