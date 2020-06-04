import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T3Su1U6Page } from './t3-su1-u6.page';

const routes: Routes = [
  {
    path: '',
    component: T3Su1U6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T3Su1U6PageRoutingModule {}
