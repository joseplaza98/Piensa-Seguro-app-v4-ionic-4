import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Su2U5Page } from './a1-su2-u5.page';

const routes: Routes = [
  {
    path: '',
    component: A1Su2U5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1Su2U5PageRoutingModule {}
