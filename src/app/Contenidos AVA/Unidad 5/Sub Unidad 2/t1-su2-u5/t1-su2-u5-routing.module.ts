import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su2U5Page } from './t1-su2-u5.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su2U5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su2U5PageRoutingModule {}
