import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3Su1U1Page } from './a3-su1-u1.page';

const routes: Routes = [
  {
    path: '',
    component: A3Su1U1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A3Su1U1PageRoutingModule {}
