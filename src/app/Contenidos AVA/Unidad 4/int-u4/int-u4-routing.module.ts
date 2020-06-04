import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU4Page } from './int-u4.page';

const routes: Routes = [
  {
    path: '',
    component: IntU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU4PageRoutingModule {}
