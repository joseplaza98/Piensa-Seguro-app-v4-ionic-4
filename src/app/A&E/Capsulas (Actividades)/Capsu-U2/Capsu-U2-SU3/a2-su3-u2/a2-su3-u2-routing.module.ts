import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Su3U2Page } from './a2-su3-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A2Su3U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2Su3U2PageRoutingModule {}
