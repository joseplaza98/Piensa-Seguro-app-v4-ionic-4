import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU2Page } from './int-u2.page';

const routes: Routes = [
  {
    path: '',
    component: IntU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU2PageRoutingModule {}
