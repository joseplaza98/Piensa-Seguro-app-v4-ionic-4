import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su2U3Page } from './t2-su2-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su2U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su2U3PageRoutingModule {}
