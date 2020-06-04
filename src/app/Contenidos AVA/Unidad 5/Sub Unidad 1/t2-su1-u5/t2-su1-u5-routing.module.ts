import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su1U5Page } from './t2-su1-u5.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su1U5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su1U5PageRoutingModule {}
