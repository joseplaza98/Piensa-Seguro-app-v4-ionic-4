import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Su4U2Page } from './t1-su4-u2.page';

const routes: Routes = [
  {
    path: '',
    component: T1Su4U2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T1Su4U2PageRoutingModule {}
