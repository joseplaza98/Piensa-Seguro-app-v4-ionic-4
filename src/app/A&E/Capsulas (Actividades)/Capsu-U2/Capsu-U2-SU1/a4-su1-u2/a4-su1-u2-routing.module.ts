import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A4Su1U2Page } from './a4-su1-u2.page';

const routes: Routes = [
  {
    path: '',
    component: A4Su1U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A4Su1U2PageRoutingModule {}
