import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T4Su1U1Page } from './t4-su1-u1.page';

const routes: Routes = [
  {
    path: '',
    component: T4Su1U1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T4Su1U1PageRoutingModule {}
