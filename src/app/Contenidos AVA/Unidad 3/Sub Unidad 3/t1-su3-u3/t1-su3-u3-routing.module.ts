import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su3U3Page } from './t1-su3-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su3U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su3U3PageRoutingModule {}
