import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su2U4Page } from './t2-su2-u4.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su2U4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su2U4PageRoutingModule {}
