import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su1U6Page } from './t1-su1-u6.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su1U6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su1U6PageRoutingModule {}
