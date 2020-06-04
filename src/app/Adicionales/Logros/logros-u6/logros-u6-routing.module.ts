import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU6Page } from './logros-u6.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU6PageRoutingModule {}
