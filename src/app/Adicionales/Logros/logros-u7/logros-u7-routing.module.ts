import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU7Page } from './logros-u7.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU7PageRoutingModule {}
