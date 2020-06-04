import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogrosU5Page } from './logros-u5.page';

const routes: Routes = [
  {
    path: '',
    component: LogrosU5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogrosU5PageRoutingModule {}
