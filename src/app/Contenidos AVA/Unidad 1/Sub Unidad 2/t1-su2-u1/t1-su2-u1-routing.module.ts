import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su2U1Page } from './t1-su2-u1.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su2U1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su2U1PageRoutingModule {}
