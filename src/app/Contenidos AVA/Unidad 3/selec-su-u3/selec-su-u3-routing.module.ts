import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecSuU3Page } from './selec-su-u3.page';

const routes: Routes = [
  {
    path: '',
    component: SelecSuU3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecSuU3PageRoutingModule {}
