import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3Su2U3Page } from './a3-su2-u3.page';

const routes: Routes = [
  {
    path: '',
    component: A3Su2U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A3Su2U3PageRoutingModule {}
