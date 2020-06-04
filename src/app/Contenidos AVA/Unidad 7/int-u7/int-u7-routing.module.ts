import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU7Page } from './int-u7.page';

const routes: Routes = [
  {
    path: '',
    component: IntU7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU7PageRoutingModule {}
