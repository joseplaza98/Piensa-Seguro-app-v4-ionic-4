import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3Su1U2Page } from './a3-su1-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A3Su1U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A3Su1U2PageRoutingModule {}
