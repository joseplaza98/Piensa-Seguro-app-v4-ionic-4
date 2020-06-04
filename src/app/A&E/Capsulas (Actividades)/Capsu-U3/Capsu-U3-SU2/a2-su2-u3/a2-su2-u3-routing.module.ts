import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Su2U3Page } from './a2-su2-u3.page';

const routes: Routes = [
  {
    path: '',
    component: A2Su2U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2Su2U3PageRoutingModule {}
