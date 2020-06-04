import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU2Page } from './logros-u2.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU2PageRoutingModule {}
