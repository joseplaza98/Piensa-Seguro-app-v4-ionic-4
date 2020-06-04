import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T5Su3U2Page } from './t5-su3-u2.page';

const routes: Routes = [
  {
    path: '',
    component: T5Su3U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T5Su3U2PageRoutingModule {}
