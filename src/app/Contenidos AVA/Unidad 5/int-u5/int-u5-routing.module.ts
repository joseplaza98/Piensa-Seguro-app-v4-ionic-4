import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntU5Page } from './int-u5.page';

const routes: Routes = [
  {
    path: '',
    component: IntU5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntU5PageRoutingModule {}
