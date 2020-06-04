import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Su3U2Page } from './a1-su3-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A1Su3U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1Su3U2PageRoutingModule {}
