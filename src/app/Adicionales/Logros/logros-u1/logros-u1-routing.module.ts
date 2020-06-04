import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU1Page } from './logros-u1.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU1PageRoutingModule {}
