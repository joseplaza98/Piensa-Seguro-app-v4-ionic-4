import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su1U3Page } from './t1-su1-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su1U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su1U3PageRoutingModule {}
