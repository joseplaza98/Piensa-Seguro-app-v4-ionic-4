import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2Su4U2Page } from './a2-su4-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A2Su4U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2Su4U2PageRoutingModule {}
