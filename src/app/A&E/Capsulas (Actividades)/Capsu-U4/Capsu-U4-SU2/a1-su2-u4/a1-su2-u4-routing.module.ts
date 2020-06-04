import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Su2U4Page } from './a1-su2-u4.page';

const routes: Routes = [
  {
    path: '',
    component: A1Su2U4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1Su2U4PageRoutingModule {}
