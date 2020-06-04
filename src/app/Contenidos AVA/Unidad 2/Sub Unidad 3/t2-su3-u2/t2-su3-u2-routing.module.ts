import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2Su3U2Page } from './t2-su3-u2.page';

const routes: Routes = [
  {
    path: '',
    component: T2Su3U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2Su3U2PageRoutingModule {}
