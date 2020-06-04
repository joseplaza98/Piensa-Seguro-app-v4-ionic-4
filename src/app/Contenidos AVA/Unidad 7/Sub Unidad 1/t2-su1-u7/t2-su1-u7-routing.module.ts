import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su1U7Page } from './t2-su1-u7.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su1U7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su1U7PageRoutingModule {}
