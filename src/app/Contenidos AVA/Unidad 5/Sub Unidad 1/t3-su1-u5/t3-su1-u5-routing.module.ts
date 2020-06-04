import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T3Su1U5Page } from './t3-su1-u5.page';

const routes: Routes = [
  {
    path: '',
    component: T3Su1U5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T3Su1U5PageRoutingModule {}
