import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU4Page } from './logros-u4.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU4PageRoutingModule {}
