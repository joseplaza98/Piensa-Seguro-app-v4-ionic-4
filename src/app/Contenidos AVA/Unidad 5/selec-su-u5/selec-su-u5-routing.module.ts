import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU5Page } from './selec-su-u5.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU5PageRoutingModule {}
