import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T4Su1U3Page } from './t4-su1-u3.page';

const routes: Routes = [
  {
    path: '',
    component: T4Su1U3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T4Su1U3PageRoutingModule {}
