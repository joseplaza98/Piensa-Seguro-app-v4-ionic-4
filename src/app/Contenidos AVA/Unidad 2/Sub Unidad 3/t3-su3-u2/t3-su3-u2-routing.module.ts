import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T3Su3U2Page } from './t3-su3-u2.page';

const routes: Routes = [
  {
    path: '',
    component: T3Su3U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T3Su3U2PageRoutingModule {}
