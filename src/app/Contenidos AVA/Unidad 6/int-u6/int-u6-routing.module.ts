import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU6Page } from './int-u6.page';

const routes: Routes = [
  {
    path: '',
    component: IntU6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU6PageRoutingModule {}
