import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1Su3U3Page } from './a1-su3-u3.page';

const routes: Routes = [
  {
    path: '',
    component: A1Su3U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A1Su3U3PageRoutingModule {}
