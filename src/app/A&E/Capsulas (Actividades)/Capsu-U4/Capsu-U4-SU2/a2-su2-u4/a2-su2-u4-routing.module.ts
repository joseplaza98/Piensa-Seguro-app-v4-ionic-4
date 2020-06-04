import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Su2U4Page } from './a2-su2-u4.page';

const routes: Routes = [
  {
    path: '',
    component: A2Su2U4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2Su2U4PageRoutingModule {}
