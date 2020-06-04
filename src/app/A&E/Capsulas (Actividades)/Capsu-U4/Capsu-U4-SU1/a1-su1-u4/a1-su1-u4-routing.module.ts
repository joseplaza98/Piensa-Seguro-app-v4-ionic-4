import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Su1U4Page } from './a1-su1-u4.page';

const routes: Routes = [
  {
    path: '',
    component: A1Su1U4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1Su1U4PageRoutingModule {}
