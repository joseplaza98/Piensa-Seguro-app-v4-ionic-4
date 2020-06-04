import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Su1U2Page } from './a2-su1-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A2Su1U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2Su1U2PageRoutingModule {}
