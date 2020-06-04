import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su3U3Page } from './t2-su3-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su3U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su3U3PageRoutingModule {}
