import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU1Page } from './int-u1.page';

const routes: Routes = [
  {
    path: '',
    component: IntU1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU1PageRoutingModule {}
