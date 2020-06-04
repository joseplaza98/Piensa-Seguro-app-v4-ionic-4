import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T6Su1U3Page } from './t6-su1-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T6Su1U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T6Su1U3PageRoutingModule {}
