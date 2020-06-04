import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su2U5Page } from './t2-su2-u5.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su2U5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su2U5PageRoutingModule {}
